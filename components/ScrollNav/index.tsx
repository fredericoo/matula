import { useState, useEffect, useRef, useCallback } from 'react';
import animateScrollTo from 'animated-scroll-to';
import { List, Item, Interactive, SubList } from './styles';
import constants from 'app/theme/constants';

interface ScrollNavItem {
    label: string;
    tag: string;
    items?: ScrollNavItem[];
    breakpoint?: string;
}
interface ScrollNavProps {
    contentId: string;
    items?: ScrollNavItem[];
    breakpoint?: string;
}

const ScrollNav: React.FC<ScrollNavProps> = ({ items, contentId, breakpoint }) => {
    const [activeNav, setActiveNav] = useState('');
    const [navItems, setNavItems] = useState<Query[]>();
    const navRef = useRef<HTMLOListElement>();

    interface Query {
        query: string;
        label: string;
        ref: Element | null;
        items?: Query[];
    }

    const queryItems = useCallback((items: ScrollNavItem[], prepend: string): Query[] => {
        return items.map(({ label, tag, items }, key) => {
            const query = `${prepend} ${tag}:nth-of-type(${key + 1})`;
            return {
                query,
                label,
                ref: document.querySelector(query),
                items: items ? queryItems(items, query) : [],
            };
        });
    }, []);

    useEffect(() => {
        items && setNavItems(queryItems(items, `#${contentId}`));
    }, [items, contentId, queryItems]);

    useEffect(() => {
        if (activeNav && navRef.current && !!activeNav.length) {
            const selectedOption = navRef?.current?.querySelector(`li[data-scroll="${activeNav}"]`);
            selectedOption &&
                animateScrollTo(selectedOption, {
                    elementToScroll: navRef.current,
                    maxDuration: 1000,
                });
        }
    }, [activeNav]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleScroll = () => {
            if (!navItems) return;
            const active = navItems
                .filter((navitem) => navitem.ref && navitem.ref.getBoundingClientRect().top <= window.innerHeight / 4)
                ?.pop()?.query;
            active && setActiveNav(active);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navItems]);

    const scrollTo = (element: Element) => {
        animateScrollTo(element, {
            verticalOffset: window.innerHeight / -4.1,
            maxDuration: 600,
            easing: (t) => {
                return 1 + --t * t * t * t * t;
            },
        });
    };

    const createNavLevel = (level: Query[], depth: number) =>
        level?.map(
            ({ ref, label, items, query }) =>
                label && (
                    <Item
                        data-scroll={query}
                        key={label}
                        active={query === activeNav}
                        depth={depth}
                        breakpoint={breakpoint}
                    >
                        <Interactive breakpoint={breakpoint} onClick={() => ref && scrollTo(ref)} type="button">
                            {label}
                        </Interactive>
                        {!!items && query === activeNav && (
                            <SubList breakpoint={breakpoint}>{createNavLevel(items, depth + 1)}</SubList>
                        )}
                    </Item>
                )
        );

    return (
        <List ref={navRef} breakpoint={breakpoint}>
            {navItems && createNavLevel(navItems, 0)}
        </List>
    );
};

ScrollNav.defaultProps = { breakpoint: constants.metrics.breakpoints.lg };

export default ScrollNav;

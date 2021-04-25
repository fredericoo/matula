import styled from 'styled-components';
import constants from 'app/theme/constants';

interface ScrollNavList {
    ref?: any;
    breakpoint?: string;
}
export const List = styled.ol<ScrollNavList>`
    background: ${({ theme }) => theme.color.background};
    display: flex;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
    max-height: 100vh;
    transition: opacity 0.3s ease-out;
    color: ${({ theme }) => theme.color.primary.dark};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.border};
    @media (${({ breakpoint }) => breakpoint}) {
        box-shadow: none;
        align-items: flex-start;
        background: transparent;
        padding: 0.5rem 0;
        flex-direction: column;
    }
`;

export const SubList = styled.ol<{ breakpoint?: string }>`
    display: none;
    @media (${({ breakpoint }) => breakpoint}) {
        display: block;
    }
`;

interface ScrollNavItem {
    active?: boolean;
    depth: number;
    breakpoint?: string;
}

export const Item = styled.li<ScrollNavItem>`
    -webkit-appearance: none;
    background: transparent;
    border: none;
    position: relative;
    transition: transform 0.6s ${constants.easing.movement}, opacity 0.3s ease-out;
    opacity: ${(props): number => (props.active || props.depth ? 1 : 0.4)};
    display: block;
    flex: 1 1 0;
    @media (${({ breakpoint }) => breakpoint}) {
        font-size: ${constants.typography.size.small};
        flex: initial;
        padding-left: ${(props) => `${props.depth}rem`};
    }

    @media (pointer: fine) {
        &:hover {
            opacity: 1;
        }
    }
`;

export const Interactive = styled.button<{ breakpoint?: string }>`
    -webkit-appearance: none;
    border: none;
    text-align: left;
    padding: 0.618em 1.2em;
    background: transparent;
    line-height: 1.375;
    white-space: nowrap;
    @media (${({ breakpoint }) => breakpoint}) {
        white-space: initial;
    }
    max-width: 60vw;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.color.primary.dark};
    cursor: pointer;
    &:focus {
        outline: 0;
    }
    &:focus,
    &:active {
        color: ${({ theme }) => theme.color.primary.medium};
    }
`;

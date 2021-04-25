import Link from "next/link";
import { StyledLi, StyledUl } from "./styles";
import { useRouter } from "next/router";
import { hrefResolver } from "prismic-config";
import { useConfig } from "app/utils/hooks/useConfig";

type MenuItem = {
	page: Document;
	label: string;
};

const Navigation: React.FC = () => {
	const { asPath } = useRouter();
	const { data: config } = useConfig();

	return (
		<StyledUl
			animate={{
				transition: {
					delayChildren: 0.6,
					staggerChildren: 1.2,
				},
			}}
		>
			{config?.data &&
				!!config.data.menu?.length &&
				config.data.menu.map((item: MenuItem) => {
					const href = hrefResolver(item.page);
					return (
						<StyledLi
							key={href}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							active={asPath.includes(href)}
						>
							<Link href={href}>
								<a>{item.label}</a>
							</Link>
						</StyledLi>
					);
				})}
		</StyledUl>
	);
};

export default Navigation;

import Link from "next/link";
import { StyledLi, StyledUl } from "./styles";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Client } from "app/utils/prismic";
import { hrefResolver } from "prismic-config";

type MenuItem = {
	page: Document;
	label: string;
};

const Navigation: React.FC = () => {
	const { asPath, locale } = useRouter();

	async function fetcher(lang: string) {
		const client = Client();
		const doc = await client.getSingle("config", {
			lang,
		});
		return doc.data.menu;
	}
	const { data } = useSWR(locale, fetcher, {
		revalidateOnFocus: false,
	});

	const menu = [
		{ label: "Home", href: "/" },
		{ label: "Programação", href: "/programacao" },
		{ label: "Sobre", href: "/sobre" },
		{ label: "Contato", href: "/contato" },
	];

	return (
		<StyledUl
			animate={{
				transition: {
					delayChildren: 0.6,
					staggerChildren: 1.2,
				},
			}}
		>
			{!!data?.length &&
				data.map((item: MenuItem) => {
					const href = hrefResolver(item.page);
					return (
						<StyledLi
							key={href}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							active={asPath === href}
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

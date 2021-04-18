import Link from "next/link";
import { StyledLi, StyledUl } from "./styles";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navigation: React.FC = () => {
	const { asPath } = useRouter();

	const menu = [
		{ label: "Home", href: "/" },
		{ label: "Programação", href: "/programacao" },
		{ label: "Indicações", href: "/indicacoes" },
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
			{menu.map((item) => (
				<StyledLi
					key={item.href}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					active={asPath === item.href}
				>
					<Link href={item.href}>
						<a>{item.label}</a>
					</Link>
				</StyledLi>
			))}
		</StyledUl>
	);
};

export default Navigation;

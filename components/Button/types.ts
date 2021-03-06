interface Button {
	type?: "outline";
	size?: "sm" | "md" | "lg" | "xl";
	disabled?: boolean;
	loading?: boolean;
}

export interface ButtonLink extends Button {
	href: string;
	onClick?: never;
	target?: "_self" | "_blank";
}

export interface ButtonButton extends Button {
	href?: never;
	onClick: () => void;
}

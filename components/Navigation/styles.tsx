import styled from "styled-components";
import { Theme } from "theme/index";
import constants from "theme/constants";
import { motion } from "framer-motion";
import { hatchBackground, hideScrollbars } from "app/theme/effects";
import Picture from "app/components/Picture";

export const StyledUl = styled(motion.ul)`
	display: flex;
	flex-direction: row;
	position: fixed;
	bottom: 0;
	min-width: min(250px, 100vw);
	width: 100%;
	overflow-y: scroll;
	${hideScrollbars}
	background: ${({ theme }) => theme.color.background};
	border-top: 1px solid ${({ theme }) => theme.color.border};
	@media (${constants.metrics.breakpoints.md}) {
		background: transparent;
		border-top: 0;
		height: 100%;
		flex-direction: column;
		position: relative;
	}
`;

interface ListItem {
	active: boolean;
	theme?: Theme;
}

export const StyledLi = styled(motion.li)<ListItem>`
	z-index: 2;
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	font-size: ${constants.typography.size.vsmall};
	a {
		display: block;
		padding: 1rem 1rem env(safe-area-inset-bottom, 1rem) 1rem;
	}
	text-transform: uppercase;
	${({ active, theme }) =>
		active
			? hatchBackground
			: `
					background: ${theme.color.background};
			  `};
	color: ${({ theme }) => theme.color.primary};

	@media (${constants.metrics.breakpoints.md}) {
		a {
			padding: 1rem;
			&:hover {
				text-decoration: none;
				color: ${({ theme, active }) =>
					active ? theme.color.primary : theme.color.secondary};
			}
		}
		box-shadow: 0 0 0 1px ${({ theme }) => theme.color.border};
		font-size: ${constants.typography.size.small};
	}
`;

export const BackgroundPicture = styled(Picture)`
	position: absolute;
	bottom: 0;
	width: 100%;
	z-index: 1;
`;

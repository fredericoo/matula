import styled from "styled-components";
import { Theme } from "theme/index";
import constants from "theme/constants";
import { motion } from "framer-motion";

export const StyledUl = styled(motion.ul)`
	display: flex;
	flex-direction: row;
	& > *:not(:last-child) {
		margin-bottom: 1rem;
	}
	position: fixed;
	bottom: 0;
	min-width: min(300px, 100vw);
	width: 100%;
	overflow-x: scroll;
	background: ${({ theme }) => theme.color.background};
	border-top: 1px solid ${({ theme }) => theme.color.border};
	@media (${constants.metrics.breakpoints.md}) {
		background: transparent;
		border-top: 0;
		height: 100%;
		flex-direction: column;
		position: relative;
		bottom: auto;
	}
`;

interface ListItem {
	active: boolean;
	theme?: Theme;
}

export const StyledLi = styled(motion.li)`
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	font-size: ${constants.typography.size.vsmall};
	padding: 1rem 1rem env(safe-area-inset-bottom, 1rem) 1rem;
	text-transform: uppercase;
	color: ${({ active, theme }: ListItem) =>
		active ? theme.color.secondary : theme.color.primary};
	@media (${constants.metrics.breakpoints.md}) {
		/* padding: 0; */
		font-size: ${constants.typography.size.medium};
	}
`;

import styled from "styled-components";
import { Theme } from "theme/index";
import constants from "theme/constants";
import { motion } from "framer-motion";

export const StyledUl = styled(motion.ul)`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	& > *:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

interface ListItem {
	active: boolean;
	theme?: Theme;
}

export const StyledLi = styled(motion.li)`
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	font-size: ${constants.typography.size.medium};
	text-transform: uppercase;
	color: ${({ active, theme }: ListItem) =>
		active ? theme.color.secondary : theme.color.primary};
`;

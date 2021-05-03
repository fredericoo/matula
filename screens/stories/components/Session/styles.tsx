import styled from "styled-components";
import constants from "app/theme/constants";
import { hatchBackground } from "app/theme/effects";

export const Label = styled.span`
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vsmall};
	font-weight: ${constants.typography.weight.regular};
	margin-bottom: 0.3em;
`;

export const NoBreak = styled.span`
	white-space: nowrap;
	letter-spacing: 0.04em;
`;

export const Header = styled.h3`
	overflow: hidden;
	width: 100%;
	text-align: center;
	padding: 1% 0;
	color: ${({ theme }) => theme.color.secondary};
	font-size: ${constants.typography.size.vsmall};
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	border-top: 3px double ${({ theme }) => theme.color.border};
	border-bottom: 1px solid ${({ theme }) => theme.color.border};
	background: ${({ theme }) => theme.color.background};
	z-index: 2;
`;

export const Entries = styled.ol`
	list-style-type: none;
	/* display: grid;
	grid-template-columns: 1fr 1fr; */
`;
export const StyledLi = styled.li`
	list-style-type: none;
`;

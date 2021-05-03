import styled, { css } from "styled-components";
import constants from "app/theme/constants";

export const Wrapper = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	padding: 0.5rem;

	font-family: ${constants.typography.font.headings};
	border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

type Filter = {
	active: boolean;
};
export const Filter = styled.button<Filter>`
	-webkit-appearance: none;
	border: none;
	background: none;
	text-align: left;
	padding: 0.5rem;
	text-transform: uppercase;
	font-size: ${constants.typography.size.vsmall};
	color: ${({ theme }) => theme.color.primary};
	${({ active }) =>
		active
			? css`
					text-decoration: underline;
					color: ${({ theme }) => theme.color.secondary};
			  `
			: ""}
`;

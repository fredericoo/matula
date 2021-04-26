import { css } from "styled-components";

export const hatchBackground = css`
	background: url("/img/hatch-green.svg")
		${({ theme }) => theme.color.background};
	background-size: 4px;
`;

export const hideScrollbars = css`
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

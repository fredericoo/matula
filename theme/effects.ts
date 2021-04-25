import { css } from "styled-components";

export const hatchBackground = css`
	background: url("/img/hatch-green.svg")
		${({ theme }) => theme.color.background};
	background-size: 4px;
`;

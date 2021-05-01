import { css } from "styled-components";

export const hatchBackground = css`
	position: relative;
	z-index: 1;
	&:before {
		content: "";
		display: block;
		width: calc(100% - 0.5rem);
		height: calc(100% - 0.5rem);
		position: absolute;
		background: url("/img/hatch-green.svg");
		background-size: 4px;
		top: 0.25rem;
		left: 0.25rem;
		z-index: -1;
	}
`;

export const hideScrollbars = css`
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

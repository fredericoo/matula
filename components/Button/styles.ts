import styled, { css } from "styled-components";
import { ButtonLink, ButtonButton } from "./types";
import constants from "app/theme/constants";

const buttonStyles = {
	outline: css`
		color: inherit;
		border: 1px solid;
		background: transparent;

		@media (pointer: fine) {
			&:hover {
				transform: scale(1.02);
			}
		}
		&:active {
			opacity: 0.8;
			transform: scale(0.98);
		}
	`,
};

const buttonSizes = {
	sm: css`
		padding: 1em 1.618em;
		font-size: ${constants.typography.size.vsmall};
	`,
	md: css`
		padding: 1em 1.618em;
		font-size: ${constants.typography.size.small};
	`,
	lg: css`
		padding: 1em 1.618em;
		font-size: ${constants.typography.size.medium};
	`,
	xl: css`
		padding: 1em 1.618em;
		font-size: ${constants.typography.size.large};
	`,
};

const disabledStyles = css`
	opacity: 0.5;
	pointer-events: none;
`;

export const StyledButton = styled.button<ButtonButton | ButtonLink>`
	-webkit-appearance: none;
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;

	${({ size }) => buttonSizes[size] || ""}
	${({ type }) => buttonStyles[type] || ""}
    ${({ disabled }) =>
		disabled ? disabledStyles : ""}
`;

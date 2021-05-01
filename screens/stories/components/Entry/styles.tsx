import styled, { css } from "styled-components";
import constants from "app/theme/constants";

export const Wrapper = styled.div`
	overflow-x: hidden;
	display: grid;
	grid-template-columns: 1.5em 1fr min-content;
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.small};
	font-weight: ${constants.typography.weight.regular};
	border-bottom: 1px dotted;
`;

export const Checkbox = styled.div<{ isChecked?: boolean }>`
	border-right: 1px solid;
	position: relative;
	height: 100%;
	@media (pointer: fine) {
		&:hover {
			background: ${({ theme }) => theme.color.tertiary};
		}
	}
	svg {
		top: 0;
		left: 0;
		position: absolute;
		stroke: ${({ theme, isChecked }) =>
			isChecked ? theme.color.secondary : "transparent"};
		display: block;
	}
`;

export const Date = styled.time`
	align-self: stretch;
	justify-self: end;
	font-family: ${constants.typography.font.headings};
	font-size: ${constants.typography.size.vsmall};

	padding: 0.3em;
	text-transform: lowercase;
	position: relative;
`;

export const Details = styled.div`
	padding: 0.3em;
	max-height: 1.4em;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const Title = styled.h3`
	font-size: ${constants.typography.size.vsmall};
	font-weight: ${constants.typography.weight.regular};
`;

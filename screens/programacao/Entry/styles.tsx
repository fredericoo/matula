import styled, { css } from "styled-components";
import constants from "app/theme/constants";
import { hatchBackground } from "app/theme/effects";

export const Wrapper = styled.a<{ active: boolean }>`
	overflow-x: hidden;
	display: grid;
	grid-template-columns: 4rem 1fr;
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.small};
	font-weight: ${constants.typography.weight.regular};
	${({ active, theme }) =>
		active
			? hatchBackground
			: css`
					background: ${theme.color.background};
			  `}
	border-bottom: 1px dotted;
	&:hover {
		text-decoration: none;
		${({ active, theme }) =>
			active ? " " : css`h3 { color: ${theme.color.secondary}`}
	}
`;

export const Date = styled.time`
	align-self: stretch;
	justify-self: end;
	font-family: ${constants.typography.font.decoration};
	font-size: ${constants.typography.size.large};
	border-right: 1px solid;
	padding: 1rem;
	text-transform: lowercase;
	position: relative;
`;

export const Details = styled.div`
	padding: 1rem;
`;

export const Type = styled.p`
	font-size: ${constants.typography.size.vsmall};
	color: ${({ theme }) => theme.color.secondary};
	margin-bottom: 0.3em;
`;

export const Title = styled.h3`
	font-weight: ${constants.typography.weight.regular};
`;

export const Subtitle = styled.p`
	font-family: ${constants.typography.font.body};
	text-transform: none;
`;

export const Stamp = styled.span`
	position: absolute;
	font-family: ${constants.typography.font.headings};
	font-size: ${constants.typography.size.vsmall};
	border: 1px solid;
	padding: 0.5em;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.secondary};
	left: 0.25em;
	top: 0.5em;
	transform: rotate(-4deg);
	mix-blend-mode: multiply;
`;

export const Progress = styled.div<{
	percentage: number;
	isAvailable: boolean;
}>`
	position: absolute;
	width: 0.25rem;
	height: ${({ percentage }) => percentage}%;
	top: 0;
	right: -0.125rem;
	background: ${({ isAvailable, theme }) =>
		isAvailable ? theme.color.tertiary : theme.color.secondary};
	${({ percentage }) => (percentage < 100 ? thumbtack : "")}
`;

const thumbtack = css`
	&:before {
		width: 0.5rem;
		height: 0.5rem;
		background: ${({ theme }) => theme.color.background};
		border: 1px solid;
		position: absolute;
		content: "";
		left: -0.125rem;
		bottom: -0.125rem;
		transform: rotate(45deg);
	}
`;

export const Tag = styled.div`
	color: ${({ theme }) => theme.color.background};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vsmall};
	font-weight: ${constants.typography.weight.regular};
	background: ${({ theme }) => theme.color.primary};
	padding: 0.3em;
	display: inline-block;
`;

import styled, { css } from "styled-components";
import constants from "app/theme/constants";
import { hatchBackground } from "app/theme/effects";

export const Wrapper = styled.a<{ active: boolean }>`
	display: grid;
	grid-template-columns: 1fr 4fr;
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

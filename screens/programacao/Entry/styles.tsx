import styled from "styled-components";
import constants from "app/theme/constants";

export const Wrapper = styled.a<{ active: boolean }>`
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 1rem;
	padding: 1rem;
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.small};
	font-weight: ${constants.typography.weight.regular};
	background-color: ${({ active, theme }) =>
		active ? theme.color.primary : theme.color.background};
`;

export const Date = styled.time`
	align-self: center;
	justify-self: end;
	font-size: ${constants.typography.size.small};
`;

export const Type = styled.p`
	font-size: ${constants.typography.size.vsmall};
`;

export const Title = styled.h3`
	font-weight: ${constants.typography.weight.regular};
`;

export const Subtitle = styled.p`
	font-family: ${constants.typography.font.body};
	text-transform: none;
`;

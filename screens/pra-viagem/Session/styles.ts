import styled from "styled-components";
import constants from "app/theme/constants";
import Grid from "app/components/Grid";

export const Header = styled.h3`
	position: sticky;
	top: 0;
	overflow: hidden;
	width: 100%;
	text-align: center;
	padding: 1rem;
	color: ${({ theme }) => theme.color.secondary};
	font-size: ${constants.typography.size.small};
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	border-bottom: 3px double ${({ theme }) => theme.color.border};
	background: ${({ theme }) => theme.color.background};
	z-index: 2;
`;

export const ContentGrid = styled(Grid)`
	height: auto;
	padding: 1rem;
`;

export const RestaurantItem = styled(Grid.Col)`
	display: flex;
	flex-direction: column;
	text-align: center;
	position: relative;
	h3 {
		color: ${({ theme }) => theme.color.secondary};
		order: 2;
		font-family: ${constants.typography.font.headings};
		text-transform: uppercase;
		font-size: ${constants.typography.size.large};
	}
	h4 {
		color: ${({ theme }) => theme.color.primary};
		order: 1;
		font-family: ${constants.typography.font.decoration};
		text-transform: uppercase;
		font-size: ${constants.typography.size.large};
		letter-spacing: 0.03em;
	}
`;

export const Biome = styled.div`
	font-size: ${constants.typography.size.small};
	color: ${({ theme }) => theme.color.tertiary};
	border: 2px solid ${({ theme }) => theme.color.tertiary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	padding: 0.618em 1em;
	display: inline-block;
	transform: rotate(-4deg);
	mix-blend-mode: multiply;
	position: absolute;
	bottom: -1.75em;
	left: 66%;
`;
export const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	a {
		background: ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.background};
		font-size: ${constants.typography.size.small};
		font-family: ${constants.typography.font.headings};
		text-transform: uppercase;
		padding: 0.618em 1em;
		margin: 0.5em;
		display: inline-block;
		&:hover {
			text-decoration: none;
			background: ${({ theme }) => theme.color.secondary};
		}
	}
`;

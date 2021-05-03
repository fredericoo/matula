import styled, { css } from "styled-components";
import Grid from "app/components/Grid";
import { hideScrollbars } from "app/theme/effects";
import constants from "app/theme/constants";

export const StyledGrid = styled(Grid)`
	overflow: hidden;
	height: 100%;
`;

type NavCol = { isSingle?: boolean };
export const NavCol = styled(Grid.Col)<NavCol>`
	display: flex;
	height: 100%;
	flex-direction: column;
	border-right: 1px solid ${({ theme }) => theme.color.border};
	overflow: hidden;
	${({ isSingle }) =>
		isSingle
			? css`
					display: none;
					@media (${constants.metrics.breakpoints.lg}) {
						display: flex;
					}
			  `
			: ""}
`;

export const ContentCol = styled(Grid.Col)`
	padding-left: 1rem;
	padding-right: 1rem;
	height: 100%;
	overflow-y: scroll;
	${hideScrollbars}
`;

export const Sessions = styled.ul`
	overflow-y: scroll;
	height: 100%;
	${hideScrollbars}
`;

export const Stories = styled.div`
	a {
		display: block;
		text-align: center;
		background: ${({ theme }) => theme.color.secondary};
		color: ${({ theme }) => theme.color.background};
		font-family: ${constants.typography.font.headings};
		text-transform: uppercase;
		font-size: ${constants.typography.size.vsmall};
		font-weight: ${constants.typography.weight.regular};
		padding: 0.5em;
	}
`;

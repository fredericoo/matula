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
	padding-left: 2rem;
	padding-right: 2rem;
	height: 100%;
	overflow-y: scroll;
	${hideScrollbars}
`;

export const Sessions = styled.ul`
	overflow-y: scroll;
	height: 100%;
	${hideScrollbars}
`;

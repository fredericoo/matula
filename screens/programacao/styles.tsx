import styled from "styled-components";
import Grid from "app/components/Grid";
import { hideScrollbars } from "app/theme/effects";

export const StyledGrid = styled(Grid)`
	overflow: hidden;
`;

export const NavCol = styled(Grid.Col)`
	display: flex;
	height: 100%;
	flex-direction: column;
	border-right: 1px solid ${({ theme }) => theme.color.border};
	overflow: hidden;
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

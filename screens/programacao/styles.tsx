import styled from "styled-components";
import Grid from "app/components/Grid";

export const NavCol = styled(Grid.Col)`
	display: flex;
	flex-direction: column;
	height: 100%;
	border-right: 1px solid ${({ theme }) => theme.color.border};
`;

export const Sessions = styled.ul`
	flex-grow: 1;
	overflow-y: scroll;
`;

import styled from "styled-components";
import constants from "app/theme/constants";
import Grid from "app/components/Grid";

export const StyledGrid = styled(Grid)`
	padding: 2rem;
`;

export const Title = styled.h1`
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vlarge};
	color: ${({ theme }) => theme.color.secondary};
`;

export const DecoCol = styled(Grid.Col)`
	padding: 2rem;
	margin-bottom: -4rem;
`;

import styled from "styled-components";
import Grid from "app/components/Grid";
import constants from "app/theme/constants";

export const StyledGrid = styled(Grid)`
	padding: 1rem;
	min-height: 100%;
	color: ${({ theme }) => theme.color.primary};
`;

export const Title = styled.h1`
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vlarge};
	color: ${({ theme }) => theme.color.secondary};
`;

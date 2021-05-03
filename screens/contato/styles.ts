import styled from "styled-components";
import Grid from "app/components/Grid";
import constants from "app/theme/constants";

export const StyledGrid = styled(Grid)`
	padding: 1rem;
`;

export const Title = styled.h1`
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vlarge};
	color: ${({ theme }) => theme.color.primary};
`;

export const Label = styled.h2`
	color: ${({ theme }) => theme.color.secondary};
	font-family: ${constants.typography.font.decoration};
	text-transform: uppercase;
	font-size: ${constants.typography.size.large};
	font-weight: ${constants.typography.weight.regular};
	margin-bottom: 0.3em;
`;

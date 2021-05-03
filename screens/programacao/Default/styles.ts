import styled from "styled-components";
import Grid from "app/components/Grid";
import constants from "app/theme/constants";

export const WrapperGrid = styled(Grid)`
	padding: 4rem 0;
`;

export const Intertitle = styled.h2`
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.secondary};
	margin-block-end: 1rem;
`;

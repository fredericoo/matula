import styled from "styled-components";
import constants from "app/theme/constants";

export const Label = styled.span`
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vsmall};
	font-weight: ${constants.typography.weight.regular};
	margin-bottom: 0.3em;
`;

export const NoBreak = styled.span`
	white-space: nowrap;
`;

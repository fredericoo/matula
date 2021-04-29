import constants from "app/theme/constants";
import styled from "styled-components";

const Label = styled.p`
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vsmall};
	font-weight: ${constants.typography.weight.regular};
	margin-bottom: 0.3em;
`;

export default Label;

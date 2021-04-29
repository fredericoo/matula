import styled from "styled-components";
import BodyText from "../BodyText";
import constants from "app/theme/constants";

export const FooterBody = styled(BodyText)`
	display: flex;
	flex-wrap: wrap;
	li {
		margin-right: 1rem;
		p {
			margin: 0;
			font-size: ${constants.typography.size.small};
		}
	}
`;

import styled from "styled-components";
import BodyText from "../BodyText";
import constants from "app/theme/constants";

export const FooterBody = styled(BodyText)`
	display: flex;
	flex-wrap: wrap;
	li {
		margin-right: 1rem;
		margin-bottom: 0;
		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}
		p {
			margin: 0;
			font-size: ${constants.typography.size.small};
		}
	}
`;

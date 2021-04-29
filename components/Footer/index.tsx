import styled from "styled-components";
import BodyText from "components/BodyText";
import constants from "app/theme/constants";
import Label from "../Label";
import { FooterBody } from "./styles";

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterBody>
				<li>
					<Label as="h4">Realização</Label>
					<p>Le petit</p>
				</li>
				<li>
					<Label as="h4">Website</Label>
					<p>Penumbra design et web</p>
				</li>
			</FooterBody>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	padding: 1rem 1rem 6rem;
	@media (${constants.metrics.breakpoints.lg}) {
		padding: 1rem;
	}
`;

export default Footer;

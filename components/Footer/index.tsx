import styled from "styled-components";
import BodyText from "components/BodyText";
import constants from "app/theme/constants";

const Footer = () => {
	return (
		<FooterWrapper>
			<BodyText>
				<h4>Realização</h4>
				<p>Le petit</p>
			</BodyText>
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

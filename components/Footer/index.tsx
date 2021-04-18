import styled from "styled-components";
import BodyText from "components/BodyText";

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
	padding: 1rem;
`;

export default Footer;

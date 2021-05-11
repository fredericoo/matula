import styled from "styled-components";
import Picture from "../Picture";
import { useConfig } from "app/utils/hooks/useConfig";
import Text from "../Text";
import BodyText from "../BodyText";
import constants from "app/theme/constants";

const Tools = () => {
	const { data: config } = useConfig();
	const sponsorImg = config?.data.sponsor_img;

	return (
		<ToolsWrapper>
			<SponsorsWrapper>
				{sponsorImg && (
					<Picture
						src={sponsorImg.url}
						width={sponsorImg.dimensions.width}
						height={sponsorImg.dimensions.height}
						alt={sponsorImg.alt}
						layout="responsive"
					/>
				)}
			</SponsorsWrapper>
			<FooterText>
				<Text content={config?.data.sponsor_text} />
			</FooterText>
		</ToolsWrapper>
	);
};

const FooterText = styled(BodyText)`
	font-size: ${constants.typography.size.small};
	letter-spacing: 0.02em;
`;

const ToolsWrapper = styled.aside`
	padding: 1rem;
`;

const SponsorsWrapper = styled.div`
	margin-right: auto;
	max-width: 600px;
`;

export default Tools;

import styled from "styled-components";
import Picture from "../Picture";
import { useConfig } from "app/utils/hooks/useConfig";
import Text from "../Text";
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
				<FooterText>
					<Text content={config?.data.sponsor_text} />
				</FooterText>
			</SponsorsWrapper>
		</ToolsWrapper>
	);
};

const FooterText = styled.div`
	color: ${({ theme }) => theme.color.primary};
	font-size: ${constants.typography.size.vsmall};
	text-transform: uppercase;
	letter-spacing: 0.04em;
`;

const ToolsWrapper = styled.aside`
	padding: 1rem;
`;

const SponsorsWrapper = styled.div`
	margin-right: auto;
	max-width: 600px;
`;

export default Tools;

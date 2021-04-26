import { StyledFrame, FrameSection, PageWrapper } from "./styles";

const Frame: React.FC & { Section: typeof FrameSection } = (props) => (
	<PageWrapper>
		<StyledFrame {...props} />
	</PageWrapper>
);

Frame.Section = FrameSection;

export default Frame;

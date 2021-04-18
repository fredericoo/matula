import { StyledFrame, FrameSection } from "./styles";

const Frame: React.FC & { Section: typeof FrameSection } = (props) => (
	<StyledFrame {...props} />
);

Frame.Section = FrameSection;

export default Frame;

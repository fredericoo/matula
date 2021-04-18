import styled from "styled-components";
import constants from "theme/constants";

export const StyledFrame = styled.div`
	display: grid;
	grid: "logo" min-content "content" 1fr "nav" min-content "tools" min-content "footer" min-content / 1fr;
	@media (${constants.metrics.breakpoints.lg}) {
		grid:
			"logo content content" min-content
			"nav content content" minmax(100px, 1fr)
			"tools tools footer" min-content / min-content 6fr 4fr;
		height: 100vh;
	}

	width: 100vw;
`;

interface FrameSection {
	gridArea: string;
	sticky?: number;
}

export const FrameSection = styled.section`
	background: ${({ theme }) => theme.color.background};
	border: solid ${({ theme }) => theme.color.border};
	border-width: 0 0 1px 1px;
	grid-area: ${(props: FrameSection) => props.gridArea};
	position: ${(props: FrameSection) =>
		props.sticky != undefined ? "sticky" : "static"};
	top: ${(props: FrameSection) =>
		props.sticky != undefined ? `${props.sticky}px` : "auto"};
	@media (${constants.metrics.breakpoints.lg}) {
		overflow-y: scroll;
	}
`;

import styled from "styled-components";
import constants from "theme/constants";

export const StyledFrame = styled.div`
	min-height: 100%;
	display: grid;
	grid: "logo" min-content "content" 1fr "nav" min-content "tools" min-content "footer" min-content / 1fr;
	background: ${({ theme }) => theme.color.background};
	@media (${constants.metrics.breakpoints.lg}) {
		padding: 1rem;
		grid:
			"logo content content" min-content
			"nav content content" minmax(100px, 1fr)
			"tools tools footer" min-content / min-content 6fr 4fr;
		height: calc(100vh);
	}
	width: 100%;
`;

interface FrameSection {
	gridArea: string;
	sticky?: number;
}

export const FrameSection = styled.section`
	background: ${({ theme }) => theme.color.background};
	box-shadow: 0 0 0 1px ${({ theme }) => theme.color.border};
	grid-area: ${(props: FrameSection) => props.gridArea};
	position: ${(props: FrameSection) =>
		props.sticky != undefined ? "sticky" : "static"};
	top: ${(props: FrameSection) =>
		props.sticky != undefined ? `${props.sticky}px` : "auto"};
	@media (${constants.metrics.breakpoints.lg}) {
		overflow-y: scroll;
	}
`;

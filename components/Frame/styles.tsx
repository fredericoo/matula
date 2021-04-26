import styled from "styled-components";
import constants from "theme/constants";

export const PageWrapper = styled.main`
	background: ${({ theme }) => theme.color.background};
	@media (${constants.metrics.breakpoints.lg}) {
		padding: 1rem;
		max-height: 100vh;
	}
`;

export const StyledFrame = styled.div`
	height: 100%;
	display: grid;
	grid: "logo" min-content "content" 1fr "nav" min-content "tools" min-content "footer" min-content / 1fr;

	@media (${constants.metrics.breakpoints.lg}) {
		height: calc(100vh - 2rem);
		grid:
			"logo content content" min-content
			"nav content content" minmax(100px, 1fr)
			"tools tools footer" min-content / min-content 6fr 4fr;
	}
	border: solid ${({ theme }) => theme.color.border};
	border-width: 0 0 1px 1px;
	width: 100%;
`;

interface FrameSection {
	gridArea: string;
	sticky?: number;
}

export const FrameSection = styled.section`
	background: ${({ theme }) => theme.color.background};
	border: solid ${({ theme }) => theme.color.border};
	border-width: 1px 1px 0 0;
	grid-area: ${(props: FrameSection) => props.gridArea};
	position: ${(props: FrameSection) =>
		props.sticky != undefined ? "sticky" : "static"};
	top: ${(props: FrameSection) =>
		props.sticky != undefined ? `${props.sticky}px` : "auto"};
	@media (${constants.metrics.breakpoints.lg}) {
		overflow-y: scroll;
	}
`;

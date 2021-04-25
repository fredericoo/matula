import styled, { css } from "styled-components";
import constants from "app/theme/constants";
import Grid from "app/components/Grid";
import View from "app/components/View";

export const Header = styled.header`
	width: calc(100% + 4rem);
	transform: translateX(-2rem);
	height: 0px;
	position: relative;
	padding-bottom: calc((100% + 4rem) * 0.5625);
	background: black;
	color: ${({ theme }) => theme.color.background};
	text-align: center;
`;

export const HeaderContent = styled.div<{ playing: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 2;
	transition: opacity 0.3s ease-out;
	${({ playing }) =>
		playing
			? css`
					color: rgba(255, 0, 0, 0.5);
					opacity: 0;
					pointer-events: none;
					mix-blend-mode: screen;
			  `
			: ""}
`;

export const Title = styled.h1`
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vlarge};
	padding: 2rem;
`;

export const Info = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;

	dl {
		display: flex;
		align-items: baseline;
		line-height: 1.6;
	}
	dt {
		font-size: ${constants.typography.size.vsmall};
		padding-right: 0.5em;
	}
	dd {
		font-size: ${constants.typography.size.small};
		padding-right: 2em;
	}
`;

export const ContentGrid = styled(Grid)`
	height: auto;
	padding-top: 2rem;
	padding-bottom: 2rem;
`;

export const Actions = styled(View)`
	padding: 2rem;
	color: ${({ theme }) => theme.color.background};
`;

export const Label = styled.p`
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vsmall};
	font-weight: ${constants.typography.weight.regular};
	margin-bottom: 0.3em;
`;

export const Video = styled.video<{ playing: boolean }>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
	transition: opacity 0.6s ease-out;
	opacity: ${({ playing }) => (playing ? 1 : 0.6)};
`;

export const PlayButton = styled.button`
	background: transparent;
	border: none;
	-webkit-appearance: none;
	color: ${({ theme }) => theme.color.background};
	@media (pointer: fine) {
		&:hover {
			transform: scale(1.1);
		}
	}
	&:active {
		transform: scale(0.96);
	}
`;

export const ProgressBar = styled.progress<{ playing: boolean }>`
	opacity: ${({ playing }) => (playing ? 1 : 0)};
	appearance: none; /* Needed for Safari */
	border: none; /* Needed for Firefox */
	background-color: rgba(255, 255, 255, 0.2);

	position: absolute;
	width: calc(100% - 1rem);
	height: 4px;
	border-radius: 2px;
	bottom: 0.5rem;
	left: 0.5rem;
	&::-webkit-progress-value,
	::-moz-progress-bar {
		background-color: ${({ theme }) => theme.color.background};
		border-radius: 2px;
	}
`;

import styled, { css } from "styled-components";
import constants from "app/theme/constants";
import Grid from "app/components/Grid";
import View from "app/components/View";
import { hatchBackground } from "app/theme/effects";

export const Header = styled.header`
	width: calc(100% + 2rem);
	transform: translateX(-1rem);
	position: relative;
	height: 60vh;
	@media (${constants.metrics.breakpoints.lg}) {
		padding-bottom: calc((100% + 2rem) * 0.5625);
		height: 0;
	}
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
	object-fit: contain;
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

export const PreviewWrapper = styled(View)`
	opacity: 0.5;
`;

export const ChefTitle = styled.h2`
	text-align: center;
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.large};
	font-weight: ${constants.typography.weight.regular};
	padding: 1rem 0;
	text-shadow: 2px 2px ${({ theme }) => theme.color.background};
	border-bottom: 2px solid ${({ theme }) => theme.color.border};
	${hatchBackground};
`;

export const RestaurantItem = styled(Grid.Col)`
	display: flex;
	flex-direction: column;
	text-align: center;
	position: relative;
	h3 {
		color: ${({ theme }) => theme.color.secondary};
		order: 2;
		font-family: ${constants.typography.font.headings};
		text-transform: uppercase;
		font-size: ${constants.typography.size.large};
	}
	h4 {
		color: ${({ theme }) => theme.color.primary};
		order: 1;
		font-family: ${constants.typography.font.decoration};
		text-transform: uppercase;
		font-size: ${constants.typography.size.large};
		letter-spacing: 0.03em;
	}
`;

export const Biome = styled.div`
	font-size: ${constants.typography.size.small};
	color: ${({ theme }) => theme.color.tertiary};
	border: 2px solid ${({ theme }) => theme.color.tertiary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	padding: 0.618em 1em;
	display: inline-block;
	transform: rotate(-4deg);
	mix-blend-mode: multiply;
	position: absolute;
	bottom: -1.75em;
	left: 66%;
`;
export const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	a {
		background: ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.background};
		font-size: ${constants.typography.size.small};
		font-family: ${constants.typography.font.headings};
		text-transform: uppercase;
		padding: 0.618em 1em;
		margin: 0.5em;
		display: inline-block;
		&:hover {
			text-decoration: none;
			background: ${({ theme }) => theme.color.secondary};
		}
	}
`;

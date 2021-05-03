import styled from "styled-components";
import Grid from "app/components/Grid";
import constants from "app/theme/constants";

export const WrapperGrid = styled(Grid)`
	padding-bottom: 2rem;
`;

export const Type = styled.p`
	padding-top: 1rem;
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.small};
	font-weight: ${constants.typography.weight.regular};
	margin-bottom: 0.3em;
`;

export const Label = styled.p`
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vsmall};
	font-weight: ${constants.typography.weight.regular};
	margin-bottom: 0.3em;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.color.secondary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.large};
	font-weight: ${constants.typography.weight.regular};
`;

export const Professor = styled.h1`
	color: ${({ theme }) => theme.color.secondary};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.medium};
	font-weight: ${constants.typography.weight.regular};
	margin-bottom: 1em;
`;

export const RightCol = styled(Grid.Col)`
	padding-bottom: 2rem;
`;

export const Table = styled.dl`
	color: ${({ theme }) => theme.color.primary};
	border: 2px solid;
	padding: 1rem;
	position: relative;

	display: grid;
	grid-template-columns: min-content 1fr;
	column-gap: 1rem;
	row-gap: 1rem;

	&:after {
		--offset: 3px;
		content: "";
		position: absolute;
		display: block;
		width: calc(100% - var(--offset) * 2);
		height: calc(100% - var(--offset) * 2);
		top: var(--offset);
		left: var(--offset);
		border: 1px solid ${({ theme }) => theme.color.secondary};
	}
	dt {
		font-size: ${constants.typography.size.vsmall};
		font-family: ${constants.typography.font.headings};
		text-transform: uppercase;
	}
	dd {
		font-size: ${constants.typography.size.large};
		font-family: ${constants.typography.font.decoration};
	}
`;

export const VideoEmbed = styled.div`
	width: calc(100% + 4rem);
	transform: translateX(-2rem);
	height: 0px;
	position: relative;
	padding-bottom: 56.18%;
	& > * {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
	}
`;

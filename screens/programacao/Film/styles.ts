import styled from "styled-components";
import constants from "app/theme/constants";
import Grid from "app/components/Grid";

export const Header = styled.header`
	width: calc(100% + 4rem);
	transform: translateX(-2rem);
	height: 0px;
	position: relative;
	padding-bottom: 56.18%;
	background: black;
	color: ${({ theme }) => theme.color.background};
	text-align: center;
`;

export const HeaderContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	position: absolute;
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

export const Actions = styled.div`
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

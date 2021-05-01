import styled from "styled-components";
import constants from "app/theme/constants";

export const Stories = styled.div`
	height: 0px;
	padding-bottom: 177.777%;
	position: relative;
	overflow: hidden;
	background: ${({ theme }) => theme.color.tertiary};
	user-select: none;
`;

export const Tape = styled.div`
	width: 7.5%;
	position: absolute;
	transform: rotate(87deg);
	top: -2%;
	right: 45%;
	z-index: 2;
`;

export const Content = styled.div`
	height: 90%;
	width: 91.5%;
	left: 1rem;
	bottom: 5%;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	background: ${({ theme }) => theme.color.background};
	position: absolute;
	padding: 4.25%;
	box-shadow: 0 0.4px 0.7px rgba(0, 0, 0, 0.088),
		0 1px 1.7px rgba(0, 0, 0, 0.097), 0 1.9px 3.4px rgba(0, 0, 0, 0.096),
		0 4px 6.9px rgba(0, 0, 0, 0.092), 0 11px 19px rgba(0, 0, 0, 0.09);
`;

export const Header = styled.header`
	padding: 0 0 2% 0;
	text-align: center;
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.large};
	color: ${({ theme }) => theme.color.primary};
`;

export const Body = styled.div`
	flex-grow: 1;
`;

export const Footer = styled.div`
	margin-top: 3%;
	text-align: center;
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	font-size: ${constants.typography.size.vsmall};
	letter-spacing: 0.04em;
	color: ${({ theme }) => theme.color.tertiary};
`;

export const LogoSvg = styled.svg`
	width: 100%;
	height: 15%;
	fill: ${({ theme }) => theme.color.primary};
	margin-bottom: 5%;
`;

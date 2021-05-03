import styled from "styled-components";
import constants from "app/theme/constants";
import Grid from "app/components/Grid";
import BodyText from "app/components/BodyText";
import { hatchBackground } from "app/theme/effects";

export const StyledGrid = styled(Grid)`
	padding: 1rem;
`;

export const PageHeading = styled.h1`
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	font-size: ${constants.typography.size.display};
	margin-bottom: 2rem;
	text-align: center;
	color: ${({ theme }) => theme.color.secondary};
	${hatchBackground}
`;

export const Content = styled(BodyText)`
	text-align: center;
	& > * {
		margin-left: auto;
		margin-right: auto;
	}
`;

export const ProductWrapper = styled.div`
	color: ${({ theme }) => theme.color.primary};
	position: relative;
`;

export const ProductTitle = styled.h2`
	font-family: ${constants.typography.font.decoration};
	font-weight: ${constants.typography.weight.regular};
	color: ${({ theme }) => theme.color.secondary};

	font-size: ${constants.typography.size.vlarge};
`;

export const ProductLogo = styled.div`
	width: 25%;
	position: absolute;
	z-index: 2;
	transform: rotate(-9deg);
	right: 0%;
	top: -5%;
	mix-blend-mode: multiply;
`;

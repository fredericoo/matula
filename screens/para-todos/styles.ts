import styled from "styled-components";
import constants from "app/theme/constants";
import Grid from "app/components/Grid";
import BodyText from "app/components/BodyText";

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
	background-color: ${({ theme }) => theme.color.secondary};
	color: ${({ theme }) => theme.color.background};
`;

export const Content = styled(BodyText)`
	text-align: center;
	& > * {
		margin-left: auto;
		margin-right: auto;
	}
`;

export const ProjectLi = styled.li`
	border-top: 1px dotted;
	padding: 1rem 0;
`;

export const ProjectHeading = styled.h2`
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	font-size: ${constants.typography.size.large};
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.color.secondary};
`;

export const ProjectContent = styled(Grid.Col)`
	color: ${({ theme }) => theme.color.secondary};
`;

export const ProjectBody = styled(BodyText)`
	margin-bottom: 1rem;
`;

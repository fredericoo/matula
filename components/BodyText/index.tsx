import styled from "styled-components";
import constants from "theme/constants";

const BodyText = styled.div`
	color: ${({ theme }) => theme.color.primary};
	font-size: ${constants.typography.size.medium};
	font-weight: ${constants.typography.weight.regular};
	h1 {
		font-size: 2em;
		line-height: 2em;
		font-weight: ${constants.typography.weight.bold};
	}
	h2 {
		font-size: 1.25em;
		line-height: 2em;
		font-weight: ${constants.typography.weight.bold};
	}
	h3 {
		font-size: 1em;
		line-height: 1.5em;
		font-weight: ${constants.typography.weight.bold};
	}
	p {
		font-size: 1em;
		line-height: 1.4em;
		&:not(:last-child) {
			margin-bottom: 1.4em;
		}
		font-weight: ${constants.typography.weight.regular};
		max-width: 77ch;
	}
	strong {
		font-weight: ${constants.typography.weight.bold};
	}
	em {
		font-style: normal;
		padding-bottom: 2px;
		border-bottom: 1px solid;
	}
	ul {
		padding-left: 1.5em;
		@media (${constants.metrics.breakpoints.md}) {
			padding-left: 0;
		}
		list-style-type: square;
		margin-bottom: 1.375em;
	}
	ol {
		padding-left: 1.5em;
		@media (${constants.metrics.breakpoints.md}) {
			padding-left: 0;
		}
		list-style-type: decimal;
		margin-bottom: 1.375em;
	}
	li {
		display: block;
		margin-bottom: 0.5em;
	}
	a {
		color: ${({ theme }) => theme.color.primary};
		@media (pointer: fine) {
			&:hover {
				text-decoration: none;
				border-bottom: 1px solid;
			}
		}
		&[target="_blank"] {
			&:after {
				content: " ↗";
			}
		}
	}
`;

export default BodyText;

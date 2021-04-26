import Grid from "components/Grid";
import styled from "styled-components";
import { Client } from "utils/prismic";
import BodyText from "components/BodyText";
import constants from "theme/constants";
import SEO from "app/components/SEO";
import Text from "app/components/Text";
import View from "app/components/View";

const HomeGrid = styled(Grid)`
	height: 100%;
	padding: 1rem;
`;

const HeaderCol = styled(Grid.Col)`
	height: 100%;
`;

const HeaderView = styled(View)`
	height: 100%;
`;

const HeaderTitle = styled.h1`
	color: ${({ theme }) => theme.color.primary};
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
`;
const HeaderBody = styled(BodyText)`
	color: ${({ theme }) => theme.color.secondary};
`;

const DatesTitle = styled.h2`
	font-size: ${constants.typography.size.large};
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.color.primary};
	strong {
		font-size: ${constants.typography.size.display};
		color: ${({ theme }) => theme.color.secondary};
		font-family: ${constants.typography.font.decoration};
		display: inline-block;
		&:nth-child(1) {
			transform: rotate(-6deg);
		}
		&:nth-child(2) {
			transform: rotate(3deg);
		}
		&:nth-child(3) {
			transform: rotate(-5deg);
		}
		&:nth-child(4) {
			transform: rotate(8deg);
		}
	}
`;

export default function Home({ doc }) {
	if (!doc) return null;
	return (
		<HomeGrid sm="10">
			<SEO />
			<HeaderCol
				sm="grid-start / grid-end"
				lg={{ col: "grid-start / col-6", row: 1, align: "end" }}
				xl={{ col: "grid-start / col-4", row: 1, align: "end" }}
			>
				<HeaderView
					sm={{ direction: "column", justify: "space-between", gap: "2rem" }}
				>
					<aside>
						<DatesTitle>
							<Text content={doc.data.dates} />
						</DatesTitle>
						<BodyText>
							<Text content={doc.data.dates_about} />
						</BodyText>
					</aside>

					<header>
						<HeaderTitle>
							<Text asText content={doc.data.title} />
						</HeaderTitle>
						<HeaderBody>
							<Text content={doc.data.desc} />
						</HeaderBody>
					</header>
				</HeaderView>
			</HeaderCol>
		</HomeGrid>
	);
}

export async function getStaticProps({ locale }) {
	const client = Client();
	const doc = await client.getSingle("home", { lang: locale });

	if (doc) {
		return {
			revalidate: 600,
			props: {
				doc: doc || {},
			},
		};
	}
	return { revalidate: 60, props: { doc: {} } };
}

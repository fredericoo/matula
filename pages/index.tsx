import Grid from "components/Grid";
import styled from "styled-components";
import { Client } from "utils/prismic";
import Picture from "components/Picture";
import BodyText from "components/BodyText";
import constants from "theme/constants";
import SEO from "app/components/SEO";
import Text from "app/components/Text";

const HomeGrid = styled(Grid)`
	height: 100%;
`;

const HeaderCol = styled(Grid.Col)`
	margin-block-end: 2rem;
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

const DatesCol = styled(Grid.Col)`
	margin-top: 2rem;
	color: ${({ theme }) => theme.color.primary};
`;

const DatesTitle = styled.h2`
	font-size: ${constants.typography.size.display};
	font-family: ${constants.typography.font.headings};
	text-transform: uppercase;
	margin-bottom: 1rem;
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
				<HeaderTitle>
					<Text asText content={doc.data.title} />
				</HeaderTitle>
				<HeaderBody>
					<Text content={doc.data.desc} />
				</HeaderBody>
			</HeaderCol>
			<Grid.Col
				sm="grid-start / grid-end"
				lg={{ col: "col-4 / screen-end", row: 1, align: "end" }}
				xl={{ col: "col-2 / col-8", row: 1, align: "end" }}
			>
				{doc.data.image?.url && (
					<Picture
						src={doc.data.image.url}
						width={doc.data.image.dimensions.width}
						height={doc.data.image.dimensions.height}
						layout="responsive"
					/>
				)}
			</Grid.Col>
			<DatesCol
				sm="grid-start / grid-end"
				lg={{ col: "col-5 / grid-end", row: 1, align: "start" }}
				xl={{ col: "col-7 / grid-end", row: 1, align: "start" }}
			>
				<DatesTitle>
					<Text asText content={doc.data.dates} />
				</DatesTitle>
				<BodyText>
					<Text content={doc.data.dates_about} />
				</BodyText>
			</DatesCol>
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

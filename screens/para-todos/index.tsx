import { Screen } from "app/pages/[type]";
import Grid from "app/components/Grid";
import Text from "app/components/Text";
import BodyText from "app/components/BodyText";
import { groupHasItems } from "app/utils/prismic";
import { RichTextBlock } from "prismic-reactjs";
import { Document } from "prismic-javascript/types/documents";
import Button from "app/components/Button";
import { hrefResolver } from "app/prismic-config";
import Picture from "app/components/Picture";

const ParaTodos: React.FC<Screen> = ({ data }) => {
	return (
		<Grid sm="10">
			<Grid.Col>
				{data.donation_title && (
					<h1>
						<Text content={data.donation_title} asText />
					</h1>
				)}
				{data.donation_text && (
					<BodyText>
						<Text content={data.donation_text} />
					</BodyText>
				)}
			</Grid.Col>

			<Grid.Col as="ul">
				{groupHasItems(data.donation_projects) &&
					data.donation_projects.map((entry, key) => (
						<Project
							key={key}
							title={entry.project_name}
							text={entry.project_text}
							link={{ label: entry.project_cta, link: entry.project_button }}
							image={entry.project_img}
						/>
					))}
			</Grid.Col>
		</Grid>
	);
};

type ProjectProps = {
	title: RichTextBlock;
	text: RichTextBlock;
	link: { label: string; link: Document };
	image: {
		url: string;
		dimensions: { width: string | number; height: string | number };
		alt: string;
	};
};
const Project: React.FC<ProjectProps> = ({ title, text, link, image }) => {
	return (
		<li>
			{title && (
				<h2>
					<Text content={title} asText />
				</h2>
			)}
			{text && (
				<BodyText>
					<Text content={text} />
				</BodyText>
			)}
			{link.label && link.link && (
				<Button href={hrefResolver(link.link)} target="_blank">
					{link.label}
				</Button>
			)}
			{image.url && (
				<Picture
					src={image.url}
					width={image.dimensions.width}
					height={image.dimensions.height}
					alt={image.alt}
				/>
			)}
		</li>
	);
};

export default ParaTodos;

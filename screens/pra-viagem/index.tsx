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

const PraViagem: React.FC<Screen> = ({ data }) => {
	return (
		<Grid sm="10">
			<Grid.Col>
				{data.page_title && (
					<h1>
						<Text content={data.page_title} asText />
					</h1>
				)}
				{data.page_text && (
					<BodyText>
						<Text content={data.page_text} />
					</BodyText>
				)}
			</Grid.Col>

			<Grid.Col as="ul">
				{groupHasItems(data.product) &&
					data.product.map((entry, key) => (
						<Product
							key={key}
							title={entry.product_name}
							text={entry.product_desc}
							link={{ label: entry.product_cta, link: entry.product_url }}
							image={entry.product_img}
							logo={entry.producer_logo}
						/>
					))}
			</Grid.Col>
		</Grid>
	);
};

type Image = {
	url: string;
	dimensions: { width: string | number; height: string | number };
	alt: string;
};

type ProductProps = {
	title: RichTextBlock;
	text: RichTextBlock;
	link: { label: string; link: Document };
	image: Image;
	logo: Image;
};
const Product: React.FC<ProductProps> = ({
	title,
	text,
	link,
	image,
	logo,
}) => {
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
			{logo.url && (
				<Picture
					src={logo.url}
					width={logo.dimensions.width}
					height={logo.dimensions.height}
					alt={logo.alt}
				/>
			)}
		</li>
	);
};

export default PraViagem;

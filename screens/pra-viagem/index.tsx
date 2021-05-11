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
import {
	StyledGrid,
	PageHeading,
	Content,
	ProductWrapper,
	ProductTitle,
	ProductLogo,
	ProductBody,
} from "./styles";
import { useMemo } from "react";
import { DaySlice } from "../programacao/types";
import moment from "moment";
import { dateFormat } from "../programacao/constants";
import Session from "./Session";
import { ChefTitle } from "../programacao/Film/styles";

const PraViagem: React.FC<Screen> = ({ data }) => {
	const dates: DaySlice[] = useMemo(
		() =>
			data.body
				.map((date: DaySlice) => ({
					...date,
					day: moment(date.primary.session_day, dateFormat),
				}))
				.sort((a: DaySlice, b: DaySlice) => {
					if (a.primary.session_day === "invalid date") return 1;
					a.day.diff(b.day);
				}),
		[data]
	);

	return (
		<>
			<StyledGrid sm="9">
				<Grid.Col>
					{data.page_title && (
						<PageHeading>
							<Text content={data.page_title} asText />
						</PageHeading>
					)}
					{data.page_text && (
						<Content>
							<Text content={data.page_text} />
						</Content>
					)}
				</Grid.Col>

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
			</StyledGrid>

			<ChefTitle>Sugestões do chef</ChefTitle>

			{dates.map((date) => (
				<Session
					title={date.primary.session_title}
					key={date.primary.session_day}
					day={date.day}
					items={date.items}
				/>
			))}
		</>
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
		<ProductWrapper lg="span 3">
			{logo.url && (
				<ProductLogo>
					<Picture
						src={logo.url}
						width={200}
						height={200}
						objectFit="contain"
						objectPosition="center right"
						alt={logo.alt}
					/>
				</ProductLogo>
			)}
			{image.url && (
				<Picture
					src={image.url}
					width={1080}
					height={1080}
					alt={image.alt}
					objectFit="cover"
				/>
			)}

			{title && (
				<ProductTitle>
					<Text content={title} asText />
				</ProductTitle>
			)}
			{text && (
				<ProductBody>
					<Text content={text} />
				</ProductBody>
			)}
			{link.label && link.link && (
				<Button href={hrefResolver(link.link)} target="_blank">
					{link.label}
				</Button>
			)}
		</ProductWrapper>
	);
};

export default PraViagem;

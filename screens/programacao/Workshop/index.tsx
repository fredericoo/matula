import Grid from "app/components/Grid";
import Text from "app/components/Text";
import BodyText from "app/components/BodyText";
import { RichTextBlock, RichText } from "prismic-reactjs";
import Picture from "app/components/Picture";
import {
	WrapperGrid,
	Type,
	Title,
	Label,
	RightCol,
	Professor,
	Table,
	VideoEmbed,
	ThumbnailCol,
} from "./styles";
import moment from "moment";
import SEO from "app/components/SEO";
import useCurrentTime from "app/utils/hooks/useCurrentTime";
import { groupHasItems } from "app/utils/prismic";
import { RestaurantItem, Biome, Links, ChefTitle } from "../Film/styles";

type Workshop = {
	data: any;
};

type Image = {
	url: string;
	dimensions: { height: number; width: number };
	alt?: string;
};

export type Author = {
	photo?: Image;
	task?: string;
	doer?: string;
	bio?: RichTextBlock;
};

const Player: React.FC<Workshop> = ({ data }) => {
	const now = useCurrentTime();
	const tillStart = moment.duration(moment(data.start).diff(now));

	const isAvailable = tillStart.asSeconds() <= 0;

	if (isAvailable && (data.embed?.html || data.embed_code))
		return (
			<Grid.Col>
				<VideoEmbed
					dangerouslySetInnerHTML={{
						__html: data.embed.html || data.embed_code,
					}}
				/>
			</Grid.Col>
		);

	if (data.img?.url)
		return (
			<Grid.Col>
				<ThumbnailCol>
					<Picture src={data.img.url} layout="fill" objectFit="cover" />
				</ThumbnailCol>
			</Grid.Col>
		);

	return null;
};

const Workshop: React.FC<Workshop> = ({ data }) => {
	return (
		<WrapperGrid lg={{ gap: "2rem", cols: 7 }}>
			<SEO
				title={
					data.seo_title || (data.title && Array.isArray(data.title))
						? RichText.asText(data.title)
						: data.title
				}
				description={data.seo_desc}
				image={data.seo_img?.url}
			/>

			<Player data={data} />
			<Grid.Col>
				<Type>
					<Text content={data.type} asText />
				</Type>
				<Title>
					<Text content={data.title} asText />
				</Title>
			</Grid.Col>
			<Grid.Col xl="grid-start / col-4">
				<Table>
					{data.start && (
						<>
							<dt>Data</dt>
							<dd>{moment(data.start).format("DD/MM")}</dd>
							<dt>Horário</dt>
							<dd>{moment(data.start).format("HH[h]mm").replace(/00$/, "")}</dd>
						</>
					)}

					{data.by &&
						data.by.map(({ task, doer }: Author) => (
							<>
								<dt>{task}</dt>
								<dd>{doer}</dd>
							</>
						))}
				</Table>
			</Grid.Col>
			<RightCol xl="col-4 / grid-end">
				<Label>Sobre</Label>
				<BodyText>
					<Text content={data.content} />
				</BodyText>
			</RightCol>
			{data.by &&
				data.by.map(({ photo, task, doer, bio }: Author) => (
					<>
						<Grid.Col lg="col-2 / col-4">
							{photo?.url && (
								<Picture
									src={photo.url}
									width={photo.dimensions.width}
									height={photo.dimensions.height}
									layout="responsive"
								/>
							)}
						</Grid.Col>
						<RightCol lg="col-4 / grid-end">
							<Label>
								<Text content={task} asText />
							</Label>
							<Professor>
								<Text content={doer} asText />
							</Professor>
							<BodyText>
								<Text content={bio} />
							</BodyText>
						</RightCol>
					</>
				))}

			{groupHasItems(data.chef) && data.chef[0]?.chef_item?.data?.s_title && (
				<>
					<Grid.Col>
						<ChefTitle>Sugestão do chef</ChefTitle>
					</Grid.Col>
					{data.chef.map((entry) => {
						if (!entry.chef_item?.data) return null;
						const {
							photo: image,
							s_restaurant: restaurant,
							s_title: title,
							s_short: short,
							s_bioma: biome,
							s_link: links,
						} = entry.chef_item.data;

						return (
							<>
								<RestaurantItem>
									<h3>
										<Text content={title} asText />
										<Biome>{biome}</Biome>
									</h3>
									<h4>
										<Text content={restaurant} asText />
									</h4>
								</RestaurantItem>
								<Grid.Col lg="grid-start / col-4">
									<BodyText>
										<Text content={short} />
									</BodyText>

									<Links>
										<Text content={links} />
									</Links>
								</Grid.Col>
								<Grid.Col lg="col-4 / grid-end">
									{image?.url && (
										<Picture
											src={image.url}
											width={image.dimensions.width}
											height={image.dimensions.height}
										/>
									)}
								</Grid.Col>
							</>
						);
					})}
				</>
			)}
		</WrapperGrid>
	);
};

export default Workshop;

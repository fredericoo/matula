import { Moment } from "moment";
import Text from "app/components/Text";
import { Header, ContentGrid, RestaurantItem, Biome, Links } from "./styles";
import Grid from "app/components/Grid";
import BodyText from "app/components/BodyText";
import Picture from "app/components/Picture";

type Session = {
	day: Moment;
	title?: string;
	items: any[];
};

const Session: React.FC<Session> = ({ day, title, items }) => {
	if (!items.length) return null;

	return (
		<>
			<Header>
				{day.format("DD/MM")}{" "}
				{!!title.length && (
					<>
						— <Text content={title} asText />
					</>
				)}
			</Header>
			<ContentGrid sm="7">
				{items &&
					items
						.filter(({ row }) => row.data)
						.map(({ row }) => (
							<>
								<RestaurantItem>
									<h3>
										<Text content={row.data.s_title} asText />
										<Biome>{row.data.s_bioma}</Biome>
									</h3>
									<h4>
										<Text content={row.data.s_restaurant} asText />
									</h4>
								</RestaurantItem>
								<Grid.Col lg="grid-start / col-4">
									<BodyText>
										<Text content={row.data.s_short} />
									</BodyText>
									<Links>
										<Text content={row.data.s_link} />
									</Links>
								</Grid.Col>
								<Grid.Col lg="col-4 / grid-end">
									{row.data.photo?.url && (
										<Picture
											src={row.data.photo.url}
											width={row.data.photo.dimensions.width}
											height={row.data.photo.dimensions.height}
										/>
									)}
								</Grid.Col>
							</>
						))}
			</ContentGrid>
		</>
	);
};

export default Session;

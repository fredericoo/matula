import { Screen } from "app/pages/[type]";
import { StyledGrid, Title, Label } from "./styles";
import Grid from "app/components/Grid";
import Text from "app/components/Text";
import Picture from "app/components/Picture";
import View from "app/components/View";
import { RichTextBlock } from "prismic-reactjs";
import BodyText from "app/components/BodyText";

type Row = {
	label: string;
	content: RichTextBlock;
};

const Contato: React.FC<Screen> = ({ data }) => {
	return (
		<StyledGrid sm={{ cols: 10, gap: "2rem" }}>
			<Grid.Col>
				<Title>{data.title && <Text content={data.title} />}</Title>
			</Grid.Col>
			<Grid.Col lg="grid-start / col-6">
				{data.image?.url && (
					<Picture
						src={data.image.url}
						width={data.image.dimensions.width}
						height={data.image.dimensions.height}
						alt={data.image.alt}
						bg="#bbcc98"
					/>
				)}
			</Grid.Col>
			<Grid.Col lg={{ col: "col-6 / grid-end", align: "center" }}>
				{!!data.rows.length && (
					<View sm={{ direction: "column", gap: "2rem" }}>
						{data.rows.map(({ label, content }: Row) => (
							<Grid sm={{ cols: 6, gap: "2rem" }}>
								<Grid.Col sm={{ col: "span 2", align: "baseline" }}>
									<Label>
										<Text content={label} asText />
									</Label>
								</Grid.Col>
								<Grid.Col sm={{ col: "span 4", align: "baseline" }}>
									<BodyText>
										<Text content={content} />
									</BodyText>
								</Grid.Col>
							</Grid>
						))}
					</View>
				)}
			</Grid.Col>
		</StyledGrid>
	);
};
export default Contato;

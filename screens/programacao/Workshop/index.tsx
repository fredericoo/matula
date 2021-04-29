import Grid from "app/components/Grid";
import Text from "app/components/Text";
import BodyText from "app/components/BodyText";
import { RichTextBlock } from "prismic-reactjs";
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
} from "./styles";
import moment from "moment";

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

const Workshop: React.FC<Workshop> = ({ data }) => {
	return (
		<WrapperGrid lg={{ gap: "2rem", cols: 7 }}>
			{data.embed?.html && (
				<Grid.Col>
					<VideoEmbed dangerouslySetInnerHTML={{ __html: data.embed.html }} />
				</Grid.Col>
			)}
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
							<dd>{moment(data.start).format("HH[h]mm").replace(/0+$/, "")}</dd>
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
		</WrapperGrid>
	);
};

export default Workshop;

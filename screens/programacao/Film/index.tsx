import Grid from "app/components/Grid";
import Text from "app/components/Text";
import {
	Header,
	Title,
	Info,
	Actions,
	HeaderContent,
	Label,
	ContentGrid,
} from "./styles";
import Button from "app/components/Button";
import moment from "moment";
import BodyText from "app/components/BodyText";
import Picture from "app/components/Picture";

type Film = {
	data: any;
};

const Film: React.FC<Film> = ({ data }) => {
	const tillStart = moment(data.start).diff(moment());
	const isAvailable = moment.duration(tillStart).asSeconds() <= 0;

	return (
		<>
			<Header>
				<HeaderContent>
					<div>
						<Title>
							<Text content={data.title} asText />
						</Title>
						<Info>
							{data.length && (
								<dl>
									<dt>Duração</dt>
									<dd>{data.length}”</dd>
								</dl>
							)}
							{data.director && (
								<dl>
									<dt>Direção</dt>
									<dd>
										<Text content={data.director} asText />
									</dd>
								</dl>
							)}
							{data.year && (
								<dl>
									<dt>Ano</dt>
									<dd>{data.year}</dd>
								</dl>
							)}
							{data.location && (
								<dl>
									<dt>Origem</dt>
									<dd>
										<Text content={data.location} asText />
									</dd>
								</dl>
							)}
							{data.pg && (
								<dl>
									<dt>Classificação</dt>
									<dd>
										<Text content={data.pg} asText />
									</dd>
								</dl>
							)}
						</Info>
					</div>
					<Actions>
						<Button
							size="sm"
							onClick={() => {
								alert("pew");
							}}
							disabled
						>
							Assistir ao filme
						</Button>
					</Actions>
				</HeaderContent>
			</Header>
			<ContentGrid>
				<Grid.Col lg="grid-start / col-4">
					{data.cover?.url && (
						<Picture
							src={data.cover.url}
							width={data.cover.dimensions.width}
							height={data.cover.dimensions.height}
							layout="responsive"
						/>
					)}
				</Grid.Col>
				<Grid.Col lg="col-4 / grid-end">
					<Label as="h2">Sinopse</Label>
					<BodyText>
						<Text content={data.short} />
					</BodyText>
				</Grid.Col>
			</ContentGrid>
		</>
	);
};

export default Film;

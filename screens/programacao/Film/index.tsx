import Grid from "app/components/Grid";
import Text from "app/components/Text";
import { Header, Title, Info, Actions, HeaderContent } from "./styles";
import Button from "app/components/Button";
import moment from "moment";

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
			<Grid></Grid>
		</>
	);
};

export default Film;

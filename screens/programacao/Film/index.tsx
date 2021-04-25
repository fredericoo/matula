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
	Video,
	PlayButton,
	ProgressBar,
} from "./styles";
import Button from "app/components/Button";
import moment from "moment";
import BodyText from "app/components/BodyText";
import Picture from "app/components/Picture";
import { useState, useEffect, forwardRef, RefObject, useRef } from "react";
import View from "app/components/View";

type Film = {
	data: any;
};

const Film: React.FC<Film> = ({ data }) => {
	const [tillStart, setTillStart] = useState(moment(data.start).diff(moment()));

	const videoRef = useRef<HTMLVideoElement>();
	const [playing, setPlaying] = useState(false);
	const [videoProgress, setVideoProgress] = useState(0);
	useEffect(() => {
		if (videoRef.current) {
			playing
				? videoRef.current.play()
				: (videoRef.current.pause(), (videoRef.current.currentTime = 0));
		}
	}, [playing]);

	const timer = moment.duration(tillStart);
	const isAvailable = moment.duration(tillStart).asSeconds() <= 0;

	useEffect(() => {
		const interval = setInterval(() => {
			setTillStart(moment(data.start).diff(moment()));
			if (videoRef.current) {
				setVideoProgress(
					Math.round(
						(videoRef.current.currentTime / videoRef.current.duration) * 100
					)
				);
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<Header>
				{data.trailer.url && (
					<>
						<Video
							playing={playing}
							ref={videoRef}
							playsInline
							controls={false}
							onClick={() => setPlaying(!playing)}
						>
							<source
								src={data.trailer.url}
								type={`video/${data.trailer.url.match(/\.([^.]+)$/)[1]}`}
							/>
						</Video>
						<ProgressBar playing={playing} max="100" value={videoProgress}>
							Progress
						</ProgressBar>
					</>
				)}
				<HeaderContent playing={playing}>
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
					<Actions sm={{ justify: "center", gap: "2rem" }}>
						{data.trailer.url && (
							<View sm={{ inline: true, direction: "column" }}>
								<PlayButton onClick={() => setPlaying(!playing)}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
										strokeLinecap="butt"
										strokeLinejoin="round"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<polygon points="10 8 16 12 10 16 10 8"></polygon>
									</svg>
								</PlayButton>
								<small>Trailer</small>
							</View>
						)}
						<View sm={{ inline: true, direction: "column", gap: ".3rem" }}>
							<Button
								size="sm"
								onClick={() => {
									alert("pew");
								}}
								disabled={!isAvailable}
							>
								Assistir ao filme
							</Button>
							{!isAvailable && (
								<small>
									disponível em{" "}
									{timer.asDays() > 1 ? (
										<span>
											{Math.floor(timer.asDays())} dia
											{timer.asDays() > 1 ? "s" : ""}
										</span>
									) : (
										<span>
											{String(timer.hours()).padStart(2, "0")}:
											{String(timer.minutes()).padStart(2, "0")}:
											{String(timer.seconds()).padStart(2, "0")}
										</span>
									)}
								</small>
							)}
						</View>
					</Actions>
				</HeaderContent>
			</Header>
			<ContentGrid sm="7">
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

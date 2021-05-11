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
	PreviewWrapper,
	ChefTitle,
	RestaurantItem,
	Biome,
	Links,
	VideoEmbed,
} from "./styles";
import Button from "app/components/Button";
import moment from "moment";
import BodyText from "app/components/BodyText";
import Picture from "app/components/Picture";
import { useState, useEffect, useRef } from "react";
import View from "app/components/View";
import SEO from "app/components/SEO";
import { RichText } from "prismic-reactjs";
import useCurrentTime from "app/utils/hooks/useCurrentTime";
import { groupHasItems } from "app/utils/prismic";

type Film = {
	data: any;
};

const Film: React.FC<Film> = ({ data }) => {
	const now = useCurrentTime();
	const tillStart = moment.duration(moment(data.start).diff(now));
	const tillEnd = moment.duration(moment(data.end).diff(now));

	const isAvailable = tillStart.asSeconds() <= 0 && tillEnd.asSeconds() >= 0;

	const isVideo =
		data.trailer.url && data.trailer.url.match(/\.(mp4|mov|webm)$/);
	const videoRef = useRef<HTMLVideoElement>();
	const [playing, setPlaying] = useState("");
	const [videoProgress, setVideoProgress] = useState(0);
	useEffect(() => {
		if (videoRef.current) {
			playing === "trailer"
				? videoRef.current.play()
				: (videoRef.current.pause(), (videoRef.current.currentTime = 0));
		}
	}, [playing]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (videoRef.current) {
				if (videoRef.current.currentTime === videoRef.current.duration) {
					setPlaying("");
				}
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
			<SEO
				title={
					data.seo_title || (data.title && Array.isArray(data.title))
						? RichText.asText(data.title)
						: data.title
				}
				description={data.seo_desc}
				image={data.seo_img?.url}
			/>
			<Header>
				{playing === "film" && (data.embed.html || data.embed_code) && (
					<VideoEmbed
						dangerouslySetInnerHTML={{
							__html: data.embed.html || data.embed_code,
						}}
					/>
				)}
				{isVideo ? (
					<>
						<Video
							playing={playing === "trailer"}
							ref={videoRef}
							playsInline
							controls={false}
							onClick={() => setPlaying("")}
						>
							<source
								src={data.trailer.url}
								type={`video/${data.trailer.url.match(/\.([^.]+)$/)[1]}`}
							/>
						</Video>
						<ProgressBar
							playing={playing === "trailer"}
							max="100"
							value={videoProgress}
						/>
					</>
				) : (
					<PreviewWrapper>
						<Picture src={data.trailer.url} layout="fill" objectFit="cover" />
					</PreviewWrapper>
				)}
				<HeaderContent playing={!!playing}>
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
						{isVideo && (
							<View sm={{ inline: true, direction: "column" }}>
								<PlayButton onClick={() => setPlaying("trailer")}>
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
									setPlaying("film");
								}}
								disabled={!isAvailable}
							>
								Assistir ao filme
							</Button>
							{!isAvailable && (
								<small>
									{tillEnd.asSeconds() > 0 ? (
										<>
											disponível em{" "}
											{tillStart.asDays() > 1 ? (
												<span>
													{Math.floor(tillStart.asDays())} dia
													{tillStart.asDays() > 1 ? "s" : ""}
												</span>
											) : (
												<span>
													{String(tillStart.hours()).padStart(2, "0")}:
													{String(tillStart.minutes()).padStart(2, "0")}:
													{String(tillStart.seconds()).padStart(2, "0")}
												</span>
											)}
										</>
									) : (
										"Este filme não está mais disponível"
									)}
								</small>
							)}
						</View>
					</Actions>
				</HeaderContent>
			</Header>
			<ContentGrid sm="7">
				<Grid.Col sm="grid-start / col-3" lg="grid-start / col-4">
					{data.cover?.url && (
						<Picture
							src={data.cover.url}
							width={data.cover.dimensions.width}
							height={data.cover.dimensions.height}
							layout="responsive"
						/>
					)}
				</Grid.Col>
				<Grid.Col sm="col-3 / grid-end" lg="col-4 / grid-end">
					<Label as="h2">Sinopse</Label>
					<BodyText>
						<Text content={data.short} />
					</BodyText>
				</Grid.Col>
			</ContentGrid>
			{groupHasItems(data.chef) && data.chef[0]?.chef_item?.data?.s_title && (
				<ContentGrid sm="7">
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
				</ContentGrid>
			)}
		</>
	);
};

export default Film;

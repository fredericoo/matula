import { useState, useEffect } from "react";
import moment, { Duration } from "moment";
import styled from "styled-components";

import Head from "next/head";
import Grid from "components/Grid";
import Image from "next/image";

export default function Home() {
	const [timer, setTimer] = useState<Duration>();

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(
				moment.duration(moment("2021-05-13", "YYYY-MM-DD").diff(moment()))
			);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<StyledPage>
			<Head>
				<title>Matula Film Festival</title>
				<meta property="og:title" content="Matula Film Festival" />
				<meta
					property="og:description"
					content="Festival gratuito e online de filmes e gastronomia."
				/>

				<link rel="icon" href="/favicon.svg" />
				<link rel="mask-icon" href="/favicon.svg" color="#000000" />
				<meta name="msapplication-TileImage" content="/favicon.png" />
				<link rel="apple-touch-icon" href="/favicon.png" sizes="512x512" />
				<link rel="icon" href="/favicon.png" sizes="512x512" />
			</Head>
			<Grid>
				<Grid.Col
					sm={{ row: "1", z: 1 }}
					md="col-2 / col-12"
					lg="col-4 / col-10"
					style={{ position: "relative" }}
				>
					<Tape top="2%" right="-2%" rotate={-5}>
						<Image
							src="/img/tape.png"
							width={167}
							height={512}
							layout="responsive"
						/>
					</Tape>
					<Tape left="4%" top="-2%" rotate={42}>
						<Image
							src="/img/tape.png"
							width={167}
							height={512}
							layout="responsive"
						/>
					</Tape>
					<Tape left="45%" bottom="-2%" rotate={89}>
						<Image
							src="/img/tape.png"
							width={167}
							height={512}
							layout="responsive"
						/>
					</Tape>
					<Image
						src="/img/poster.png"
						width="1200"
						height="1683"
						layout="responsive"
					/>
				</Grid.Col>
				<Grid.Col
					sm={{ row: "1", z: 2, align: "end" }}
					md="col-2 / col-12"
					lg="col-4 / col-10"
				>
					{timer && (
						<Timer>
							<h4 className="ff-headings">Faltam</h4>
							{!!timer.asDays() ? (
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
							<figcaption className="ff-headings sobre">
								FESTIVAL ONLINE & GRATUITO
							</figcaption>
						</Timer>
					)}
				</Grid.Col>
			</Grid>
		</StyledPage>
	);
}

interface TapeProps {
	left?: string;
	top?: string;
	bottom?: string;
	right?: string;
	rotate?: number;
}

const Tape = styled.div`
	position: absolute;
	z-index: 2;
	left: ${({ left }: TapeProps) => left};
	top: ${({ top }: TapeProps) => top};
	bottom: ${({ bottom }: TapeProps) => bottom};
	right: ${({ right }: TapeProps) => right};
	transform: ${({ rotate }: TapeProps) => `rotate(${rotate}deg)`};
	width: 5%;
	height: 5%;
`;

const StyledPage = styled.main`
	padding-top: 2rem;
	padding-bottom: 2rem;
	min-height: 100vh;
	background: var(--colour__green);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Timer = styled.div`
	mix-blend-mode: multiply;
	padding: 7%;
	text-align: center;
	color: var(--colour__blue);
	font-size: calc(1.2rem + 2vw);
	h4 {
		color: var(--colour__accent);
		text-transform: uppercase;
		font-size: 0.4em;
	}
	figcaption {
		color: var(--colour__accent);
		text-transform: uppercase;
		font-size: 1rem;
	}
`;

import { StyledPage, Tape, Timer } from "./styles";
import Grid from "components/Grid";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Duration } from "moment";
import Image from "next/image";
import moment from "moment";
import SEO from "../SEO";

const TBD = ({
	date,
	onFinish,
}: {
	date: moment.Moment;
	onFinish: () => void;
}) => {
	const [timer, setTimer] = useState<Duration>();

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(moment.duration(date.diff(moment())));
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (timer && timer.asSeconds() <= 0) {
			onFinish();
		}
	}, [timer]);

	return (
		<StyledPage>
			<SEO />
			<Grid sm={"10"}>
				<Grid.Col
					sm={{ row: "1", z: 1 }}
					md="col-2 / col-10"
					lg="col-4 / col-8"
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
					md="col-2 / col-10"
					lg="col-4 / col-8"
				>
					{timer && (
						<Timer>
							<h4 className="ff-headings">Faltam</h4>
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
							<figcaption className="ff-headings sobre">
								FESTIVAL ONLINE & GRATUITO
							</figcaption>
						</Timer>
					)}
				</Grid.Col>
			</Grid>
		</StyledPage>
	);
};

export default TBD;

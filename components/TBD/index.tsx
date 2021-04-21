import { StyledPage, Tape, Timer } from "./styles";
import Grid from "components/Grid";

import { useEffect, useState } from "react";
import { Duration } from "moment";

import moment from "moment";
import SEO from "../SEO";
import Picture from "../Picture";

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
					sm={{ col: "col-2 / col-10", row: "1", z: 1 }}
					lg="col-4 / col-8"
					style={{ position: "relative" }}
				>
					<Tape top="2%" right="-2%" rotate={-5}>
						<Picture
							src="/img/tape.png"
							width={167}
							height={512}
							layout="responsive"
						/>
					</Tape>
					<Tape left="4%" top="-2%" rotate={42}>
						<Picture
							src="/img/tape.png"
							width={167}
							height={512}
							layout="responsive"
						/>
					</Tape>
					<Tape left="45%" bottom="-2%" rotate={89}>
						<Picture
							src="https://images.prismic.io/matula/66f7e057-3ef9-4227-ba79-e62a9066ea15_tape.png?auto=compress,format"
							width={167}
							height={512}
							layout="responsive"
						/>
					</Tape>
					<Picture
						src="https://images.prismic.io/matula/910ed246-dbde-42b3-a20b-bbd4ecbb4bd9_poster.png?auto=compress,format"
						width="1200"
						height="1683"
						layout="responsive"
						bg="#f8efe5"
					/>
				</Grid.Col>
				<Grid.Col
					sm={{ col: "col-2 / col-10", row: "1", z: 2, align: "end" }}
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

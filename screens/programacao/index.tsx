import { Screen } from "app/pages/[type]";
import Grid from "app/components/Grid";
import moment, { Moment } from "moment";
import Session from "./Session";
import { useState, useMemo } from "react";
import Filters from "./Filters";
import { NavCol, Sessions } from "./styles";
import { Document } from "prismic-javascript/types/documents";
const dateFormat = "YYYY-MM-DD";

type Programacao = {
	current?: Document;
};
type DaySlice = {
	primary: Primary;
	body: any;
	day?: Moment;
	items?: any[];
};
type Primary = {
	session_day: string;
	session_title: string;
};

const Programacao: React.FC<Screen & Programacao> = ({ data, current }) => {
	const [filter, setFilter] = useState("");

	const dates: DaySlice[] = useMemo(
		() =>
			data.body
				.map((date: DaySlice) => ({
					...date,
					day: moment(date.primary.session_day, dateFormat),
				}))
				.sort((a: DaySlice, b: DaySlice) => {
					if (a.primary.session_day === "invalid date") return 1;
					a.day.diff(b.day);
				}),
		[data]
	);

	const categories: string[] = useMemo(
		() =>
			Array.from(
				new Set(
					data.body
						.map((date: DaySlice) =>
							date.items.map((item) => item.row.data?.type)
						)
						.flat()
				)
			),
		[data]
	);

	return (
		<Grid sm="10">
			<NavCol as="nav" md="screen-start / col-4">
				<Filters filter={filter} items={categories} onFilter={setFilter} />
				<Sessions>
					{dates.map((date) => (
						<Session
							current={current}
							title={date.primary.session_title}
							key={date.primary.session_day}
							day={date.day}
							items={date.items.filter(
								({ row }) => !filter.length || row.data.type === filter
							)}
						/>
					))}
				</Sessions>
			</NavCol>
			<Grid.Col md="col-4 / screen-end">{current?.uid}</Grid.Col>
		</Grid>
	);
};

export default Programacao;

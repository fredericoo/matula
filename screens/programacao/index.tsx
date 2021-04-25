import { Screen } from "app/pages/[type]";
import Grid from "app/components/Grid";
import moment, { Moment } from "moment";
import Session from "./Session";
import { useState, useMemo } from "react";
import Filters from "./Filters";
import { NavCol, Sessions, StyledGrid, ContentCol } from "./styles";
import { Document } from "prismic-javascript/types/documents";
import Workshop from "./Workshop";
import Film from "./Film";
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

const contentFromType = (type: string) => {
	const map = {
		oficina: Workshop,
		sessao: Film,
	};
	return map[type] || null;
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

	const Current = current ? contentFromType(current.type) : null;

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
		<StyledGrid sm={{ cols: 10, gap: "0" }}>
			<NavCol as="nav" md="grid-start / col-4">
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
			<ContentCol md="col-4 / grid-end">
				{Current && <Current data={current.data} />}
			</ContentCol>
		</StyledGrid>
	);
};

export default Programacao;

import { Screen } from "app/pages/[type]";
import moment from "moment";
import Session from "./Session";
import { useState, useMemo, useRef, useEffect } from "react";
import Filters from "./Filters";
import { NavCol, Sessions, StyledGrid, ContentCol, Stories } from "./styles";
import { Document } from "prismic-javascript/types/documents";
import Workshop from "./Workshop";
import Film from "./Film";
import Default from "./Default";
import { DaySlice } from "./types";
import { dateFormat } from "./constants";
import Link from "next/link";

type Programacao = {
	current?: Document;
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
	const contentRef = useRef<HTMLDivElement>();

	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.scrollTop = 0;
		}
	}, [current]);

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
			<NavCol as="nav" md="grid-start / col-4" isSingle={!!Current}>
				<Filters filter={filter} items={categories} onFilter={setFilter} />
				<Sessions>
					{dates.map((date) => (
						<Session
							current={current}
							title={date.primary.session_title}
							key={date.primary.session_day}
							day={date.day}
							items={date.items.filter(
								({ row }) => !filter.length || row.data?.type === filter
							)}
						/>
					))}
				</Sessions>
			</NavCol>
			<ContentCol ref={contentRef} md="col-4 / grid-end">
				{Current ? (
					<Current key={current.uid} data={current.data} />
				) : (
					<Default data={data} />
				)}
			</ContentCol>
		</StyledGrid>
	);
};

export default Programacao;

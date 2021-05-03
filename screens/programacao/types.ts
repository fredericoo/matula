import { Moment } from "moment";

export type DaySlice = {
	primary: Primary;
	body: any;
	day?: Moment;
	items?: any[];
};
export type Primary = {
	session_day: string;
	session_title: string;
};

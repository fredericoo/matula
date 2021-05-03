import { Breakpoint } from "app/theme/constants";

export type ViewProps = {
	[key in Breakpoint]?: ViewPoint | string;
};

interface ViewPoint {
	align?: "flex-start" | "center" | "flex-end";
	justify?:
		| "space-between"
		| "space-around"
		| "flex-start"
		| "center"
		| "flex-end";
	sticky?: number | string;
	padding?: string;
	margin?: string;
	direction?: "row" | "column";
	zIndex?: number;
	inline?: boolean;
	gap?: number | string;
}

export type Breakpoint = "sm" | "md" | "lg" | "xl";

export type GridProps = {
	[key in Breakpoint]?: GridSize | string;
};
interface GridSize {
	gap?: string;
	cols?: number;
	main?: boolean;
}

export type ColProps = {
	[key in Breakpoint]?: ColSize | string;
};
interface ColSize {
	col?: string | number;
	row?: string | number;
	z?: number | string;
	align?: string;
	justify?: string;
}

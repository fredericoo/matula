export interface GridProps {
	sm?: GridSize | string;
	md?: GridSize | string;
	lg?: GridSize | string;
	xl?: GridSize | string;
	children: JSX.Element | JSX.Element[] | string;
	props?: any;
}

interface GridSize {
	gap: string;
}

export interface ColProps {
	sm?: ColSize | string;
	md?: ColSize | string;
	lg?: ColSize | string;
	xl?: ColSize | string;
	children: JSX.Element | JSX.Element[] | string;
	props?: any;
}

interface ColSize {
	col?: string;
	row?: string;
	z?: number;
	align?: string;
	justify?: string;
}

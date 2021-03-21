import { StyledGrid, StyledCol } from "./styles";
import { GridProps, ColProps } from "./types";

const Grid = ({
	sm = { gap: "2rem" },
	md,
	lg,
	xl,
	children,
	...props
}: GridProps): JSX.Element => {
	return <StyledGrid {...{ sm, md, lg, xl, ...props }}>{children}</StyledGrid>;
};

const Col = ({
	sm = { col: "grid-start / grid-end" },
	md,
	lg,
	xl,
	children,
	...props
}: ColProps): JSX.Element => {
	return <StyledCol {...{ sm, md, lg, xl, ...props }}>{children}</StyledCol>;
};

Grid.Col = Col;
export default Grid;

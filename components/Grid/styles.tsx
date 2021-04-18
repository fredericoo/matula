import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { GridProps, ColProps, Breakpoint } from "./types";
import constants from "app/theme/constants";

const breakpoints: Breakpoint[] = ["sm", "md", "lg", "xl"];

const wrapInBreakpoint = (
	style: FlattenSimpleInterpolation,
	breakpoint: Breakpoint
): FlattenSimpleInterpolation => {
	if (breakpoint === "sm") return style;
	return css`
		@media (${constants.metrics.breakpoints[breakpoint]}) {
			${style}
		} ;
	`;
};

const colsToGrid = (cols: number) => {
	return css`
		grid-template-columns:
			[screen-start]
			var(--sidebearing)
			[grid-start col-1] 1fr ${new Array(cols - 1)
				.fill("")
				.map((_, index) => `[col-${index + 2}] 1fr`)
				.join(" ")} [grid-end]
			var(--sidebearing)
			[screen-end];
	`;
};

export const StyledCol = styled.div<ColProps>`
	${(props) =>
		breakpoints.map((key) => {
			const config = props[key];
			if (!config) return "";
			if (typeof config === "string") {
				return wrapInBreakpoint(
					css`
						--col: ${config};
					`,
					key
				);
			}
			return wrapInBreakpoint(
				css`
					${config.col ? `--col: ${config.col};` : ""}
					${config.row
						? `--row: ${config.row};`
						: ""}
                    ${config.z
						? `--zIndex: ${config.z};`
						: ""} 
                    ${config.align
						? `--alignSelf: ${config.align};`
						: ""} 
                    ${config.justify
						? `--justifySelf: ${config.justify}`
						: ""}
				`,
				key
			);
		})}
	grid-column: var(--col);
	grid-row: var(--row);
	align-self: var(--alignSelf);
	justify-self: var(--justifySelf);
	z-index: var(--zIndex);
	max-width: 100%;
`;
StyledCol.defaultProps = { sm: { col: "grid-start / grid-end" } };

export const StyledGrid = styled.section<GridProps>`
	width: 100%;
	display: grid;
	--sidebearing: calc((100vw - ${constants.metrics.containerWidth}) / 2);
	${(props) =>
		breakpoints.map((key) => {
			const config = props[key];
			if (!config) return "";
			if (typeof config === "string") {
				return colsToGrid(+config);
			}
			return wrapInBreakpoint(
				css`
					--gap: ${config?.gap};
					${colsToGrid(+config.cols)}
				`,
				key
			);
		})}
	gap: min(4vw,var(--gap));
`;
StyledGrid.defaultProps = { sm: { gap: "2rem", cols: 12 } };

import styled from "styled-components";
import { GridProps, ColProps } from "./types";
import { breakpoints, metrics } from "./constants";

export const StyledGrid = styled.section`
	width: 100%;
	display: grid;
	--gap: ${({ sm }: GridProps): string =>
		typeof sm === "string" ? sm : sm.gap};
	${(props) =>
		Object.entries(breakpoints).map(
			([point, size]) =>
				props[point] &&
				`@media (${size}) { --gap: ${
					typeof props[point] === "string" ? props[point] : props[point].gap
				};}`
		)}
	--sidebearing: calc((100vw - ${metrics.containerWidth}) / 2);
	gap: var(--gap);
	grid-template-columns:
		[screen-start]
		var(--sidebearing)
		[grid-start col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [col-5] 1fr [col-6] 1fr [col-7] 1fr [col-8] 1fr [col-9] 1fr [col-10] 1fr [col-11] 1fr [col-12] 1fr [grid-end]
		var(--sidebearing)
		[screen-end];
`;

export const StyledCol = styled.div`
	${({ sm }: ColProps): string =>
		`--col: ${typeof sm === "string" ? sm : sm.col || "grid-start / grid-end"}; 
        --row: ${(typeof sm === "object" && sm.row) || "auto"}; 
        --zIndex: ${(typeof sm === "object" && sm.z) || "auto"}; 
        --alignSelf: ${(typeof sm === "object" && sm.align) || "auto"}; 
        --justifySelf: ${(typeof sm === "object" && sm.justify) || "auto"}`};
	${(props) =>
		Object.entries(breakpoints).map(
			([point, size]) =>
				props[point] &&
				`@media (${size}) { 
                    ${
											props[point] &&
											`--col: ${
												(typeof props[point] === "string"
													? props[point]
													: props[point].col) || "inherit"
											};`
										}
                    ${
											props[point]?.row &&
											`--row: ${
												(typeof props[point] === "object" &&
													props[point].row) ||
												"inherit"
											};`
										}
                    ${
											props[point]?.z &&
											`--zIndex: ${
												(typeof props[point] === "object" && props[point].z) ||
												"inherit"
											};`
										} 
                    ${
											props[point]?.align &&
											`--alignSelf: ${
												(typeof props[point] === "object" &&
													props[point].align) ||
												"inherit"
											};`
										} 
                    ${
											props[point]?.justify &&
											`--justifySelf: ${
												(typeof props[point] === "object" &&
													props[point].justify) ||
												"inherit"
											}`
										} }`
		)}
	grid-column: var(--col);
	grid-row: var(--row);
	align-self: var(--alignSelf);
	justify-self: var(--justifySelf);
	z-index: var(--zIndex);
`;

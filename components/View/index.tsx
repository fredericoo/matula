import constants, { Breakpoint } from "app/theme/constants";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import type { ViewProps } from "../View/types";

const wrapBreakpoint = (
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

const breakpoints: Breakpoint[] = ["sm", "md", "lg", "xl"];

const View = styled.div<ViewProps>`
	${(props) =>
		breakpoints.map((key) => {
			const config = props[key];
			if (!config) return "";
			if (typeof config === "string") {
				return wrapBreakpoint(
					css`
						padding: ${config};
					`,
					key
				);
			}
			return wrapBreakpoint(
				css`
					${config.padding ? `padding: ${config.padding};` : ""}
					${config.margin
						? `margin: ${config.margin};`
						: ""}
                    ${config.justify
						? `justify-content: ${config.justify};`
						: ""}
                    ${config.align
						? `align-items: ${config.align};`
						: ""}
                    ${config.direction
						? `flex-direction: ${config.direction};`
						: ""}
                    ${config.zIndex
						? `position: relative; z-index: ${config.zIndex};`
						: ""}
                    ${config.sticky
						? `position: sticky; top: ${config.sticky};`
						: ""}
				`,
				key
			);
		})}
	display: flex;
`;

export default View;

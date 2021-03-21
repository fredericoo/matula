import styled from "styled-components";

interface FlowProps {
	spacing?: string;
	horizontal?: boolean;
	children: JSX.Element | JSX.Element[];
	props?: any;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ horizontal }: FlowProps): string =>
		horizontal ? "row" : "column"};
	& > *:not(:last-child) {
		${({ horizontal, spacing }: FlowProps): string =>
			`${horizontal ? "margin-right" : "margin-bottom"}: ${spacing}`}
	}
`;

const Flow = ({
	spacing = "1rem",
	horizontal = false,
	children,
	...props
}: FlowProps): JSX.Element => (
	<Wrapper {...{ spacing, horizontal, ...props }}>{children}</Wrapper>
);

export default Flow;

import styled from "styled-components";
import { TapeProps } from "./types";

export const Tape = styled.div`
	position: absolute;
	z-index: 2;
	left: ${({ left }: TapeProps) => left};
	top: ${({ top }: TapeProps) => top};
	bottom: ${({ bottom }: TapeProps) => bottom};
	right: ${({ right }: TapeProps) => right};
	transform: ${({ rotate }: TapeProps) => `rotate(${rotate}deg)`};
	width: 5%;
	height: 5%;
`;

export const StyledPage = styled.main`
	padding-top: 2rem;
	padding-bottom: 2rem;
	min-height: 100vh;
	background: var(--colour__green);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Timer = styled.div`
	mix-blend-mode: multiply;
	padding: 7%;
	text-align: center;
	color: var(--colour__blue);
	font-size: calc(1.2rem + 2vw);
	h4 {
		color: var(--colour__accent);
		text-transform: uppercase;
		font-size: 0.4em;
	}
	figcaption {
		color: var(--colour__accent);
		text-transform: uppercase;
		font-size: 1rem;
	}
`;

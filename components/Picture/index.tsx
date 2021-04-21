import Image, { ImageProps } from "next/image";
import { useState, SyntheticEvent } from "react";
import styled from "styled-components";

interface Picture {
	bg?: string;
}

type LazyLoadPicture = {
	hasLoaded: boolean;
};

const Wrapper = styled.div<Picture & LazyLoadPicture>`
	transition: background-color 1s ease-out;
	background-color: ${({ hasLoaded, bg }) => (hasLoaded ? "transparent" : bg)};
`;

const StyledImage = styled(Image)`
	transition: opacity 1s ease-out;
	opacity: ${({ hasLoaded }: LazyLoadPicture) => (hasLoaded ? 1 : 0)};
`;

const Picture = (props: ImageProps & Picture) => {
	const [hasLoaded, setLoaded] = useState<boolean>(false);
	const fixImageSrc = (src: string) => src.replace("auto=compress,format", "");

	const handleLoad = (event: SyntheticEvent<HTMLImageElement, Event>): void => {
		if (
			(event.target as HTMLImageElement).src.indexOf("data:image/gif;base64") <
			0
		) {
			setLoaded(true);
		}
	};

	return (
		<Wrapper hasLoaded={hasLoaded} bg={props.bg}>
			<StyledImage
				hasLoaded={hasLoaded}
				{...{
					...props,
					src: fixImageSrc(props.src),
					quality: props.quality || 90,
					onLoad: handleLoad,
				}}
			/>
		</Wrapper>
	);
};

export default Picture;

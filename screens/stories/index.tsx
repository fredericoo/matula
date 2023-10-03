import Grid from "app/components/Grid";
import { StyledGrid, Title } from "./style";
import Text from "app/components/Text";
import { useRouter } from "next/router";
import BodyText from "app/components/BodyText";
import Builder from "./components/Builder";
import Button from "app/components/Button";

import { useRef } from "react";

const Stories = ({ programacao }) => {
	const { locale } = useRouter();
	const storiesRef = useRef<HTMLDivElement>(null);

	return (
		<StyledGrid sm="10">
			<Grid.Col lg="grid-start / col-4">
				<Title>
					<Text content={"asdsa"} asText />
				</Title>
				<BodyText>
					<Text content={"asdasd"} />
				</BodyText>
			</Grid.Col>

			<Grid.Col lg="col-4 / col-8">
				<Builder ref={storiesRef} data={programacao?.data} />
			</Grid.Col>

			<Grid.Col lg="col-8 / grid-end">
				{storiesRef && (
					<Button
						onClick={async () => {
							if (window !== undefined && storiesRef) {
								document.body.scrollTop = 0;
								document.documentElement.scrollTop = 0;

								const exportComponentAsPNG = (
									await import("react-component-export-image")
								).exportComponentAsPNG;

								setTimeout(
									() =>
										exportComponentAsPNG(storiesRef, {
											fileName: "minha-matula",
											html2CanvasOptions: {
												scrollX: 0,
												scrollY: window.scrollY,
											},
										}),
									100
								);
							}
						}}
					>
						Salvar
					</Button>
				)}
			</Grid.Col>
		</StyledGrid>
	);
};



export default Stories;

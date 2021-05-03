import { Screen } from "app/pages/[type]";
import Grid from "app/components/Grid";
import { StyledGrid, Title } from "./style";
import Text from "app/components/Text";
import { Client } from "app/utils/prismic";
import { useRouter } from "next/router";
import useSWR from "swr";
import BodyText from "app/components/BodyText";
import Builder from "./components/Builder";
import Button from "app/components/Button";

import { useRef } from "react";

const Stories: React.FC<Screen> = ({ data }) => {
	const { locale } = useRouter();
	const storiesRef = useRef<HTMLDivElement>(null);

	async function fetcher(_endpoint: string) {
		const client = Client();

		const doc = await client.getSingle("programacao", {
			lang: locale,
			fetchLinks: [
				"sessao.title",
				"sessao.start",
				"oficina.title",
				"oficina.start",
			],
		});

		return doc;
	}
	const { data: programacao } = useSWR("stories", fetcher, {
		revalidateOnFocus: false,
	});

	return (
		<StyledGrid sm="10">
			<Grid.Col lg="grid-start / col-4">
				<Title>
					<Text content={data.title} asText />
				</Title>
				<BodyText>
					<Text content={data.text} />
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

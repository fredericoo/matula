import Stories from "app/screens/stories";
import { Client } from "app/utils/prismic";

export async function getStaticProps({locale}) {
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

		return {props: {programacao: doc || {}}}
}

export default Stories
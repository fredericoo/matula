import { Client } from "app/utils/prismic";
import Prismic from "prismic-javascript";
import Event from "app/screens/event";
import { getLayoutData } from "app/components/Layout/layout.data";

export const getStaticPaths = async () => {
	const client = Client();
	const documents = await client.query([
		Prismic.Predicates.at("document.type", "oficina"),
	]);

	if (documents) {
		return {
			paths: documents.results.map((doc) => {
				return {
					params: { uid: doc.uid },
					locale: doc.lang,
				};
			}),
			fallback: true,
		};
	}
	return { paths: [] };
};

export const getStaticProps = async ({ params, locale }) => {
	const client = Client();
	const config = await getLayoutData(locale);
	const doc = await client.getSingle("programacao", {
		lang: locale,
		fetchLinks: [
			"sessao.title",
			"sessao.type",
			"sessao.start",
			"sessao.end",
			"sessao.director",
			"oficina.title",
			"oficina.type",
			"oficina.start",
			"oficina.end",
			"oficina.by",
		],
	});
	const page = await client.query(
		Prismic.Predicates.at("my.oficina.uid", params.uid),
		{
			lang: locale,
			fetchLinks: [
				"sugestoes.photo",
				"sugestoes.s_restaurant",
				"sugestoes.s_title",
				"sugestoes.s_short",
				"sugestoes.s_bioma",
				"sugestoes.s_link",
			],
		}
	);
	return {
		props: { doc: doc || {}, page: page || {}, config },
	};
};

export default Event;

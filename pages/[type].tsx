import { Client } from "app/utils/prismic";
import Programacao from "app/screens/programacao";
import SEO from "app/components/SEO";
import Sobre from "app/screens/sobre";
import Contato from "app/screens/contato";
import ParaTodos from "app/screens/para-todos";
import PraViagem from "app/screens/pra-viagem";
import Stories from "app/screens/stories";
import { RichText } from "prismic-reactjs";

export type Screen = { data: any };

type Screens = { [uid: string]: React.FC<Screen> };
const screens: Screens = {
	programacao: Programacao,
	sobre: Sobre,
	contato: Contato,
	"para-todos": ParaTodos,
	"pra-viagem": PraViagem,
	stories: Stories,
};

export const Page: React.FC<{ doc: any }> = ({ doc }) => {
	if (!doc) return null;

	const Screen = screens[doc.type];
	if (Screen && doc.data) {
		return (
			<>
				<SEO
					title={
						doc.data.seo_title ||
						(doc.data.title && Array.isArray(doc.data.title))
							? RichText.asText(doc.data.title)
							: doc.data.title
					}
					description={doc.data.seo_desc}
					image={doc.data.seo_img?.url}
				/>
				<Screen data={doc.data} />
			</>
		);
	}
	return null;
};

export default Page;

type MenuPage = { page: any };

export const getStaticPaths = async () => {
	const client = Client();
	const doc = await client.getSingle("config", { lang: "*" });
	if (doc) {
		return {
			paths: doc.data.menu.map((doc: MenuPage) => {
				return {
					params: { type: doc.page.type },
					locale: doc.page.lang,
				};
			}),
			fallback: true,
		};
	}
	return { paths: [] };
};

export const getStaticProps = async ({ params, locale }) => {
	const client = Client();
	const doc = await client.getSingle(params.type, {
		lang: locale,
		fetchLinks: [
			"sessao.title",
			"sessao.type",
			"sessao.start",
			"sessao.end",
			"sessao.director",
			"sessao.tag",
			"oficina.title",
			"oficina.type",
			"oficina.start",
			"oficina.end",
			"oficina.by",
			"sugestoes.photo",
			"sugestoes.s_restaurant",
			"sugestoes.s_title",
			"sugestoes.s_short",
			"sugestoes.s_bioma",
			"sugestoes.s_link",
		],
	});
	return {
		props: { doc: doc || {} },
		revalidate: 60,
	};
};

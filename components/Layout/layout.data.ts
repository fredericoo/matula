import { Client } from "app/utils/prismic";

export const getLayoutData = async (lang: string) => {
    const client = Client();

    const doc = await client.getSingle("config", {
		lang,
	});

    return doc
}
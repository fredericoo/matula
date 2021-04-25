import useSWR, { SWRResponse, SWRConfiguration } from "swr";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { Client } from "../prismic";
import { Document } from "prismic-javascript/types/documents";

const ConfigContext = createContext<undefined | SWRResponse<Document, Error>>(
	undefined
);

export const ConfigProvider = ({ children }) => {
	const { locale } = useRouter();

	async function fetcher(lang: string) {
		const client = Client();

		const doc = await client.getSingle("config", {
			lang: lang,
		});
		return doc;
	}
	const config = useSWR(locale, fetcher, {
		revalidateOnFocus: false,
	});

	return (
		<ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
	);
};

export const useConfig = () => {
	const config = useContext(ConfigContext);
	return config;
};

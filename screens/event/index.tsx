import { Layout } from "app/components/Layout/Layout";
import Programacao from "../programacao";

const Event = ({ doc, page, config }) => {
	if (!doc || !doc.data) return null;
	return <Layout config={config}><Programacao data={doc.data} current={page?.results[0]} /></Layout>;
};

export default Event;

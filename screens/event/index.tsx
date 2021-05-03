import Programacao from "../programacao";

const Event = ({ doc, page }) => {
	if (!doc || !doc.data) return null;
	return <Programacao data={doc.data} current={page?.results[0]} />;
};

export default Event;

import { RichText } from "prismic-reactjs";

type Text = {
	content?: any;
	asText?: boolean;
};

const Text: React.FC<Text> = ({ content, asText }) => {
	if (Array.isArray(content)) {
		if (asText) return <>{RichText.asText(content)}</>;
		return <RichText render={content} />;
	}
	if (typeof content === "string") {
		return <>{content}</>;
	}
	return null;
};

export default Text;

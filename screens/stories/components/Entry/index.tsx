import { RichTextBlock } from "prismic-reactjs";
import Text from "app/components/Text";
import moment from "moment";
import { Wrapper, Title, Date, Details, Checkbox } from "./styles";
import { useState } from "react";

type Entry = {
	title: string | RichTextBlock;
	start: string;
	initialState?: boolean;
};

const Entry: React.FC<Entry> = ({ title, start, initialState = false }) => {
	const [isChecked, setChecked] = useState(initialState);

	return (
		<Wrapper>
			<Checkbox onClick={() => setChecked(!isChecked)} isChecked={isChecked}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#e66617"
					strokeWidth="2"
					strokeLinecap="butt"
				>
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			</Checkbox>
			<Details>
				<Title>
					<Text content={title} asText />
				</Title>
			</Details>
			<Date>{moment(start).format("HH[h]mm").replace(/0+$/, "")}</Date>
		</Wrapper>
	);
};

export default Entry;

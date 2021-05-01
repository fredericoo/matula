import { Moment } from "moment";
import Text from "app/components/Text";
import Entry from "../Entry";
import { RichText } from "prismic-reactjs";
import { Header, StyledLi, Entries } from "./styles";

type Session = {
	day: Moment;
	title?: string;
	items: any[];
};

const Session: React.FC<Session> = ({ day, title, items }) => {
	if (!items.length) return null;

	return (
		<StyledLi>
			<Header>
				{day.format("DD/MM")}{" "}
				{!!title.length && (
					<>
						— <Text content={title} asText />
					</>
				)}
			</Header>
			<Entries>
				{items &&
					items
						.filter(({ row }) => row.data)
						.map(({ row }, key) => (
							<Entry
								key={RichText.asText(row.data.title)}
								title={row.data.title}
								start={row.data.start}
								initialState={key === 0}
							/>
						))}
			</Entries>
		</StyledLi>
	);
};

export default Session;

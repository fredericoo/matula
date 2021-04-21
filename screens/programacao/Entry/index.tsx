import { RichTextBlock } from "prismic-reactjs";
import Text from "app/components/Text";
import moment from "moment";
import { Wrapper, Type, Title, Subtitle, Date } from "./styles";
import Link from "next/link";

type Entry = {
	active: boolean;
	href: string;
	type: string;
	title: string | RichTextBlock;
	subtitle: string;
	start: string;
	end: string;
};

const Entry: React.FC<Entry> = ({
	href,
	type,
	title,
	subtitle,
	start,
	end,
}) => {
	return (
		<Link href={href} passHref>
			<Wrapper active={false}>
				<Date>{moment(start).format("HH[h]mm").replace(/0+$/, "")}</Date>
				<div>
					<Type>
						<Text content={type} />
					</Type>
					<Title>
						<Text content={title} asText />
					</Title>
					<Subtitle>
						<Text content={subtitle} />
					</Subtitle>
				</div>
			</Wrapper>
		</Link>
	);
};

export default Entry;

import { RichTextBlock } from "prismic-reactjs";
import Text from "app/components/Text";
import moment from "moment";
import { Wrapper, Type, Title, Subtitle, Date, Details } from "./styles";
import Link from "next/link";

type Entry = {
	active: boolean;
	href: string;
	type: string;
	title: string | RichTextBlock;
	subtitle: JSX.Element | string;
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
	active,
}) => {
	return (
		<Link href={href} passHref>
			<Wrapper active={active}>
				<Date>{moment(start).format("HH[h]mm").replace(/0+$/, "")}</Date>
				<Details>
					<Type>
						<Text content={type} />
					</Type>
					<Title>
						<Text content={title} asText />
					</Title>
					<Subtitle>{subtitle}</Subtitle>
				</Details>
			</Wrapper>
		</Link>
	);
};

export default Entry;

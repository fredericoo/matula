import { RichTextBlock } from "prismic-reactjs";
import Text from "app/components/Text";
import moment from "moment";
import {
	Wrapper,
	Type,
	Title,
	Subtitle,
	Date,
	Details,
	Stamp,
	Progress,
	Tag,
} from "./styles";
import Link from "next/link";
import useCurrentTime from "app/utils/hooks/useCurrentTime";

type Entry = {
	tag?: RichTextBlock;
	docType: string;
	active: boolean;
	href: string;
	type: string;
	title: string | RichTextBlock;
	subtitle: JSX.Element | string;
	start: string;
	end: string;
};

const Entry: React.FC<Entry> = ({
	tag,
	docType,
	href,
	type,
	title,
	subtitle,
	start,
	end,
	active,
}) => {
	const now = useCurrentTime();
	const tillStart = Math.floor(
		moment.duration(moment(start).diff(now)).asSeconds()
	);
	const duration = Math.floor(
		moment.duration(moment(start).diff(end)).asSeconds()
	);
	const tillEnd = Math.floor(
		moment.duration(moment(end).diff(now)).asSeconds()
	);

	return (
		<Link href={href} passHref>
			<Wrapper active={active}>
				<Date>{moment(start).format("HH[h]mm").replace(/00$/, "")}</Date>
				<Details>
					<Type>
						<Text content={type} />
					</Type>
					<Title>
						<Text content={title} asText />
					</Title>
					<Subtitle>{subtitle}</Subtitle>
					{tag && (
						<Tag>
							<Text content={tag} asText />
						</Tag>
					)}
					{tillStart <= 0 && tillEnd >= 0 && (
						<Stamp>{docType === "sessao" ? "ASSISTA" : "LIVE"}</Stamp>
					)}
					{tillStart <= 0 && tillEnd <= 0 ? (
						<Progress
							isAvailable={docType === "sessao" ? false : true}
							percentage={100}
						/>
					) : (
						tillStart <= 0 && (
							<Progress
								isAvailable={true}
								percentage={Math.floor(100 + (tillEnd * 100) / duration)}
							></Progress>
						)
					)}
				</Details>
			</Wrapper>
		</Link>
	);
};

export default Entry;

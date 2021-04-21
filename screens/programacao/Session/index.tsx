import { Moment } from "moment";
import styled from "styled-components";
import constants from "app/theme/constants";
import Text from "app/components/Text";
import Entry from "../Entry";
import { RichText } from "prismic-reactjs";
import { hrefResolver } from "app/prismic-config";
import { Document } from "prismic-javascript/types/documents";

type Session = {
	day: Moment;
	title?: string;
	items: any[];
	current: Document;
};

const Session: React.FC<Session> = ({ day, title, items, current }) => {
	if (!items.length) return null;
	return (
		<li>
			<Header>
				{day.format("DD/MM")}{" "}
				{!!title.length && (
					<>
						— <Text content={title} asText />
					</>
				)}
			</Header>
			<ol>
				{items &&
					items
						.filter(({ row }) => row.data)
						.map(({ row }) => (
							<Entry
								active={current && row.uid === current.uid}
								href={hrefResolver(row)}
								key={RichText.asText(row.data.title)}
								type={row.data.type}
								title={row.data.title}
								subtitle={
									row.type === "sessao"
										? `direção ${row.data.director}`
										: `com ${row.data.by}`
								}
								start={row.data.start}
								end={row.data.end}
							/>
						))}
			</ol>
		</li>
	);
};

const Header = styled.h3`
	overflow: hidden;
	width: 100%;
	text-align: center;
	padding: 1rem;
	color: ${({ theme }) => theme.color.secondary};
	font-size: ${constants.typography.size.medium};
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
`;

export default Session;

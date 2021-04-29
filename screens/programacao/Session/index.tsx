import { Moment } from "moment";
import styled from "styled-components";
import constants from "app/theme/constants";
import Text from "app/components/Text";
import Entry from "../Entry";
import { RichText } from "prismic-reactjs";
import { hrefResolver } from "app/prismic-config";
import { Document } from "prismic-javascript/types/documents";
import { useRouter } from "next/router";

type Session = {
	day: Moment;
	title?: string;
	items: any[];
	current: Document;
};

const Session: React.FC<Session> = ({ day, title, items }) => {
	const { asPath } = useRouter();
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
								active={asPath === hrefResolver(row)}
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
	position: sticky;
	top: 0;
	overflow: hidden;
	width: 100%;
	text-align: center;
	padding: 1rem;
	color: ${({ theme }) => theme.color.secondary};
	font-size: ${constants.typography.size.small};
	font-family: ${constants.typography.font.headings};
	font-weight: ${constants.typography.weight.regular};
	text-transform: uppercase;
	border-bottom: 3px double ${({ theme }) => theme.color.border};
	background: ${({ theme }) => theme.color.background};
`;

export default Session;

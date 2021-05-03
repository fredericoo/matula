import { Moment } from "moment";
import styled from "styled-components";
import constants from "app/theme/constants";
import Text from "app/components/Text";
import Entry from "../Entry";
import { RichText } from "prismic-reactjs";
import { hrefResolver } from "app/prismic-config";
import { Document } from "prismic-javascript/types/documents";
import { useRouter } from "next/router";
import { Author } from "../Workshop";
import { Label, NoBreak, Header, StyledLi } from "./styles";

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
		<StyledLi>
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
								tag={row.data?.tag}
								docType={row.type}
								active={asPath === hrefResolver(row)}
								href={hrefResolver(row)}
								key={RichText.asText(row.data.title)}
								type={row.data.type}
								title={row.data.title}
								subtitle={
									row.type === "sessao" ? (
										<>
											<Label>Direção</Label>{" "}
											<NoBreak>{row.data.director}</NoBreak>
										</>
									) : (
										row.data.by?.map(({ task, doer }: Author) => (
											<>
												<p>
													<Label>{task}</Label> <NoBreak>{doer}</NoBreak>
												</p>
											</>
										))
									)
								}
								start={row.data.start}
								end={row.data.end}
							/>
						))}
			</ol>
		</StyledLi>
	);
};

export default Session;

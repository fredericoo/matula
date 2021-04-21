import { Filter, Wrapper } from "./styles";

type Filters = {
	items: string[];
	onFilter: (item: string) => void;
	filter: string;
};

const Filters: React.FC<Filters> = ({ items, filter, onFilter }) => {
	return (
		<Wrapper>
			<li key="tudo">
				<Filter active={!filter.length} onClick={() => onFilter("")}>
					Tudo
				</Filter>
			</li>
			{items.map((item) => (
				<li key={item}>
					<Filter active={filter === item} onClick={() => onFilter(item)}>
						{item}
					</Filter>
				</li>
			))}
		</Wrapper>
	);
};

export default Filters;

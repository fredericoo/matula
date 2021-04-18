import { StyledGrid, StyledCol } from './styles';
import { GridProps } from './types';

const Grid: React.FC<GridProps> & { Col: typeof StyledCol } = (props) => <StyledGrid {...props} />;

Grid.Col = StyledCol;

export default Grid;

import styled from "styled-components";
import BodyText from "components/BodyText";

const Tools = () => {
	return (
		<ToolsWrapper>
			<BodyText>
				<p>
					A arte em Minas é muito forte, onde nossos saberes, nossa cultura,
					permeia o imaginário aparecendo em diversas formas. Como não lembrar
					dos contos de Guimarães Rosa? Em Primeiras Estórias (1962), o conto A
					Terceira Margem do Rio narra sobre o garoto que vê o pai se despedir
					da família para nunca mais voltar: “Nem falou outras palavras, não
					pegou matula e trouxa”.
				</p>
			</BodyText>
		</ToolsWrapper>
	);
};

const ToolsWrapper = styled.aside`
	padding: 1rem;
`;

export default Tools;

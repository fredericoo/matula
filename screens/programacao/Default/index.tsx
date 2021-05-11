import Grid from "app/components/Grid";
import { Document } from "prismic-javascript/types/documents";
import Picture from "app/components/Picture";
import Text from "app/components/Text";
import BodyText from "app/components/BodyText";
import { WrapperGrid, Intertitle } from "./styles";
import React from "react";
import { RichText } from "prismic-reactjs";

type DefaultPage = { data: Document["data"] };

const Default: React.FC<DefaultPage> = ({ data }) => {
	return (
		<WrapperGrid sm="7">
			{data.sections?.map(
				({
					sections_img: image,
					sections_title: title,
					sections_content: content,
				}) => (
					<React.Fragment key={RichText.asText(title)}>
						<Grid.Col lg="grid-start / col-3">
							{image.url && (
								<Picture
									src={image.url}
									width={image.dimensions.width}
									height={image.dimensions.height}
									layout="responsive"
								/>
							)}
						</Grid.Col>
						<Grid.Col lg="col-3 / grid-end">
							<Intertitle>
								<Text content={title} asText />
							</Intertitle>
							<BodyText>
								<Text content={content} />
							</BodyText>
						</Grid.Col>
					</React.Fragment>
				)
			)}
		</WrapperGrid>
	);
};

export default Default;

import Grid from "app/components/Grid";
import { Screen } from "app/pages/[type]";
import Text from "app/components/Text";
import BodyText from "app/components/BodyText";
import Picture from "app/components/Picture";
import { Title, StyledGrid, DecoCol } from "./styles";

const Sobre: React.FC<Screen> = ({ data }) => {
	return (
		<>
			<StyledGrid sm={{ cols: 10, gap: "2rem" }}>
				<Grid.Col>
					{data.title && (
						<Title>
							<Text content={data.title} asText />
						</Title>
					)}
				</Grid.Col>
				<Grid.Col lg="col-3 / col-8">
					{data.content1 && (
						<BodyText>
							<Text content={data.content1} />
						</BodyText>
					)}
				</Grid.Col>
				<Grid.Col lg="col-8 / grid-end">
					{data.deco1?.url && (
						<Picture
							src={data.deco1.url}
							width={data.deco1.dimensions.width}
							height={data.deco1.dimensions.height}
							alt={data.deco1.dimensions.alt}
							bg="#bbcc98"
							layout="responsive"
							sizes="(max-width: 768px) 150px,
								(max-width: 1920px) 300px,
								600px"
						/>
					)}
				</Grid.Col>
				<Grid.Col>
					{data.title2 && (
						<Title as="h2">
							<Text content={data.title2} asText />
						</Title>
					)}
				</Grid.Col>
				<Grid.Col lg="grid-start / col-4">
					{data.deco2?.url && (
						<Picture
							src={data.deco2.url}
							width={data.deco2.dimensions.width}
							height={data.deco2.dimensions.height}
							alt={data.deco2.dimensions.alt}
							bg="#bbcc98"
							layout="responsive"
							sizes="(max-width: 768px) 150px,
								(max-width: 1920px) 300px,
								600px"
						/>
					)}
				</Grid.Col>
				<Grid.Col lg="col-4 / col-9">
					{data.content2 && (
						<BodyText>
							<Text content={data.content2} />
						</BodyText>
					)}
				</Grid.Col>
				<Grid.Col lg={{ col: "col-9 / grid-end", align: "end" }}>
					{data.icon1?.url && (
						<Picture
							src={data.icon1.url}
							width={data.icon1.dimensions.width}
							height={data.icon1.dimensions.height}
							alt={data.icon1.dimensions.alt}
							layout="responsive"
						/>
					)}
				</Grid.Col>
			</StyledGrid>
			<StyledGrid sm={{ cols: 10, gap: "2rem" }}>
				<Grid.Col lg={{ col: "grid-start / col-10", row: 1 }}>
					{data.deco3?.url && (
						<Picture
							src={data.deco3.url}
							width={data.deco3.dimensions.width}
							height={data.deco3.dimensions.height}
							alt={data.deco3.dimensions.alt}
							bg="#bbcc98"
							layout="responsive"
							sizes="(max-width: 768px) 300px,
								(max-width: 1920px) 600px,
								1200px"
						/>
					)}
				</Grid.Col>
				<DecoCol lg={{ col: "col-9 / grid-end", row: 1, align: "end" }}>
					{data.icon2?.url && (
						<Picture
							src={data.icon2.url}
							width={data.icon2.dimensions.width}
							height={data.icon2.dimensions.height}
							alt={data.icon2.dimensions.alt}
							layout="responsive"
						/>
					)}
				</DecoCol>
			</StyledGrid>
			<StyledGrid sm={{ cols: 10, gap: "2rem" }}>
				<Grid.Col>
					{data.title3 && (
						<Title as="h2">
							<Text content={data.title3} asText />
						</Title>
					)}
				</Grid.Col>
				<Grid.Col lg={{ col: "grid-start / col-3", align: "end" }}>
					{data.icon3?.url && (
						<Picture
							src={data.icon3.url}
							width={data.icon3.dimensions.width}
							height={data.icon3.dimensions.height}
							alt={data.icon3.dimensions.alt}
							layout="responsive"
						/>
					)}
				</Grid.Col>
				<Grid.Col lg="col-3 / col-8">
					{data.content3 && (
						<BodyText>
							<Text content={data.content3} />
						</BodyText>
					)}
				</Grid.Col>
				<Grid.Col lg="col-8 / grid-end">
					{data.deco4?.url && (
						<Picture
							src={data.deco4.url}
							width={data.deco4.dimensions.width}
							height={data.deco4.dimensions.height}
							alt={data.deco4.dimensions.alt}
							bg="#bbcc98"
							layout="responsive"
							sizes="(max-width: 768px) 150px,
								(max-width: 1920px) 300px,
								600px"
						/>
					)}
				</Grid.Col>
			</StyledGrid>
		</>
	);
};

export default Sobre;

export interface Theme {
	color: ColorGroup;
}

interface ColorGroup {
	[key: string]: string | ColorGroup;
}

const theme: Theme = {
	color: {
		neutral: {
			dark: "rgba(0,0,0,0.9)",
			medium: "rgba(0, 0, 0, 0.5)",
			light: "rgba(0,0,0,0.3)",
		},
		background: "#f8efe5",
		primary: "#e66617",
		secondary: "#4c3688",
		tertiary: "#bbcc98",
		border: "#4c3688",
	},
};

export default theme;

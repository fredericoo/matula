const constants = {
	info: {
		title: "Matula Film Festival",
		description: "Festival gratuito e online de filmes e gastronomia.",
		url: "https://matula.vercel.app",
	},
	typography: {
		font: {
			body: `"founders-grotesk", -apple-system, BlinkMacSystemFont,
			"Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol"`,
			headings: `"lexend-tera", -apple-system, BlinkMacSystemFont, "Segoe UI",
			Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
			"Segoe UI Symbol"`,
		},
		size: {
			vsmall: ".6rem",
			small: ".85rem",
			medium: "1.125rem",
			large: "1.4rem",
			display: "3.6rem",
		},
		weight: {
			regular: "normal",
			bold: "bold",
		},
	},
	metrics: {
		borderRadius: "4px",
		borderRadiusLarge: "8px",
		containerWidth: "1366px",
		breakpoints: {
			md: "min-width: 37.5625em",
			lg: "min-width: 56.25em",
			xl: "min-width: 75em",
		},
	},
	easing: {
		movement: "ease-out",
	},
};

export default constants;

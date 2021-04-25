module.exports = {
	// -- Prismic API endpoint
	// Determines which repository to query and fetch data from
	// Configure your site's access point here
	apiEndpoint: "https://matula.cdn.prismic.io/api/v2",
	// process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT,
	accessToken: "",
	// process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

	// -- Link resolution rules
	// Manages links to internal Prismic documents
	// Modify as your project grows to handle any new routes you've made
	linkResolver: function (doc) {
		if (doc.type === "home") {
			return `/`;
		}
		return `/${doc.uid}`;
	},

	// Additional helper function for Next/Link component
	hrefResolver: function (doc) {
		switch (doc.type) {
			case "home":
				return `/`;
			case "sessao":
				return `/filme/${doc.uid}`;
			case "oficina":
				return `/oficina/${doc.uid}`;
			default:
				return `/${doc.uid}`;
		}
	},
};

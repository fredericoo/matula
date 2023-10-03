import "../styles/globals.scss";
import { useState, useEffect } from "react";
import TBD from "components/TBD";
import moment from "moment";
import Frame from "components/Frame";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Tools from "components/Tools";
import Logo from "components/Logo";
import { CurrentTimeProvider } from "app/utils/hooks/useCurrentTime";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";
import { AppComponent } from "next/dist/shared/lib/router/router";

const App: AppComponent = ({ Component, pageProps }) => {
	const releaseDate = moment();
	const alreadyReleased =
		moment.duration(releaseDate.diff(moment())).asSeconds() <= 0;
	const [released, setReleased] = useState(alreadyReleased);

	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<ThemeProvider theme={theme}>
			{released ? (
				<Component {...pageProps} />
			) : (
				<TBD
					date={releaseDate}
					onFinish={() => {
						setReleased(true);
					}}
				/>
			)}
		</ThemeProvider>
	);
}

export default App;

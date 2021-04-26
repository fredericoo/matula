import "../styles/globals.scss";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useState } from "react";
import TBD from "components/TBD";
import moment from "moment";
import Frame from "components/Frame";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Tools from "components/Tools";
import Logo from "components/Logo";
import { ConfigProvider } from "app/utils/hooks/useConfig";

function App({ Component, pageProps }: AppProps): JSX.Element {
	const releaseDate = moment(); // moment("2021-05-13", "YYYY-MM-DD");
	const alreadyReleased =
		moment.duration(releaseDate.diff(moment())).asSeconds() <= 0;
	const [released, setReleased] = useState(alreadyReleased);

	return (
		<ThemeProvider theme={theme}>
			{released ? (
				<ConfigProvider>
					<Frame>
						<Frame.Section gridArea="logo" sticky={0} z={100}>
							<Logo />
						</Frame.Section>
						<Frame.Section gridArea="content">
							<Component {...pageProps} />
						</Frame.Section>
						<Frame.Section gridArea="nav" z={100}>
							<Navigation />
						</Frame.Section>
						<Frame.Section gridArea="tools">
							<Tools />
						</Frame.Section>
						<Frame.Section gridArea="footer">
							<Footer />
						</Frame.Section>
					</Frame>
				</ConfigProvider>
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

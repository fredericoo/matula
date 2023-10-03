import { PropsWithChildren } from "react";
import Frame from "components/Frame";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Tools from "components/Tools";
import Logo from "components/Logo";
import { CurrentTimeProvider } from "app/utils/hooks/useCurrentTime";
import { Document } from "prismic-javascript/types/documents";

export const Layout = ({ children, config }: PropsWithChildren<{config: Document}>) => {
  return (<CurrentTimeProvider>
      <Frame>
        <Frame.Section gridArea="logo" sticky={0} z={100}>
          <Logo />
        </Frame.Section>
        <Frame.Section gridArea="content">{children}</Frame.Section>
        <Frame.Section gridArea="nav" z={100}>
          <Navigation config={config} />
        </Frame.Section>
        <Frame.Section gridArea="tools">
          <Tools config={config}/>
        </Frame.Section>
        <Frame.Section gridArea="footer">
          <Footer />
        </Frame.Section>
        <Frame.Section gridArea="icons"></Frame.Section>
      </Frame>
  </CurrentTimeProvider>);
};
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer } from "collections";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-XXXXXXX"
};

export const navigationProps = {
  navigation: [
    {
      id: 1,
      title: "Boost your campaign performance",
      link: "#"
    },
    {
      id: 2,
      title: "Boost your campaigns",
      link: "#"
    },
    {
      id: 3,
      title: "Start optimising now",
      link: "#"
    },
    {
      id: 4,
      title: "CampaignMeisters building blocks",
      link: "#"
    }
  ]
};
export const legalProps = {
  legal: [
    {
      id: 1,
      title: "Privacy Policy",
      link: "#"
    },
    {
      id: 2,
      title: "Cookie Policy",
      link: "#"
    },
    {
      id: 3,
      title: "Terms & Conditions",
      link: "#"
    }
  ]
};

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  useEffect(() => {
    // TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>app title goes here</title>
        <meta name='description' content='app description goes here' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer {...navigationProps} {...legalProps} />
    </ThemeProvider>
  );
}

export default MyApp;

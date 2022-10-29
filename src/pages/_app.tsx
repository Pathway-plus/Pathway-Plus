import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/layout";
import AppContext from "../utils/AppContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const initialValue = {};

  return (
    <AppContext.Provider value={initialValue}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;

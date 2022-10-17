import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/layout";
import AppContext from "../utils/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  const initialValue = {};

  return (
    <AppContext.Provider value={initialValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;

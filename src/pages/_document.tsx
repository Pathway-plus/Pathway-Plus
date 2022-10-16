import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}

export default Document;

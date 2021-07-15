/* eslint-disable react/no-danger */
import { ColorModeScript } from "@chakra-ui/react";

import theme from "../../styles/theme";
import Document, { Html, Main, NextScript, Head } from "next/document";
// import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // const sheet = new ServerStyleSheet();
    // const originalRenderPage = ctx.renderPage;

    // try {
    // ctx.renderPage = () =>
    // 	originalRenderPage({
    // 		enhanceApp: (App) => (props) =>
    // 			sheet.collectStyles(<App {...props} />),
    // 	});

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // styles: (
      // 	<>
      // 		{initialProps.styles}
      // 		{sheet.getStyleElement()}
      // 	</>
      // ),
    };

    // }
    // finally {
    // 	sheet.seal();
    // }
  }
  render() {
    return (
      <Html lang="en-us">
        <Head>
          <meta name="theme-color" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

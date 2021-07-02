// import theme from "@styles/theme";
import { Chakra } from "@styles/chakra";
import "@styles/global.css";
import Amplify from "aws-amplify";
import { META } from "config";
// import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import awsconfig from "../aws-exports";
import AuthContext from "../context/AuthContext";
// eslint-disable-next-line import/no-default-export

Amplify.configure({ ...awsconfig, ssr: true });
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>{META.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <ChakraProvider resetCSS theme={theme}> */}
			<AuthContext>
				<Chakra cookies={pageProps.cookies}>
					<Component {...pageProps} />
				</Chakra>
			</AuthContext>
			{/* </ChakraProvider> */}
		</>
	);
}

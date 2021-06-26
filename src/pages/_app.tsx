import { pageview } from "@lib/gtag";
// import theme from "@styles/theme";
import { Chakra } from "@styles/chakra";
import "@styles/global.css";
import { META } from "config";
// import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-default-export
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<title>{META.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <ChakraProvider resetCSS theme={theme}> */}
			<Chakra cookies={pageProps.cookies}>
				<Component {...pageProps} />
			</Chakra>
			{/* </ChakraProvider> */}
		</>
	);
}

import "@styles/global.css";
import Footer from "@components/footer";
import Header from "@components/header";
import { pageview } from "@lib/gtag";
import { META } from "config";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import type { AppProps } from "next/app";

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
				npm i --save-dev @types/next
				<title>{META.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="google-site-verification"
					content="tbqolPb6n_mDbYE1TUl7I_AMzMp-jdSB1E7khOmABA8"
				/>
			</Head>

			<Header />

			<Component {...pageProps} />

			<Footer />
		</>
	);
}

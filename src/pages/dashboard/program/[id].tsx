import { useRouter } from "next/router";
// import { useEffect } from "react";
import Layout from "@components/dashboard/layout";
export default function Program(): JSX.Element {
	const router = useRouter();
	const { pid } = router.query;

	// useEffect(() => {}, []);
	return <Layout>{pid}</Layout>;
}

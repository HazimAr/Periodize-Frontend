import ProgramList from "@components/dashboard/programList";
import Layout from "@components/dashboard/layout";

import { useEffect, useState } from "react";
import { getPrograms } from "@api/program";

// type Data = {
// 	code: number;
// 	message: string;
// 	data: any;
// };

export default function Programs(): JSX.Element {
	const [data, setData] = useState();
	async function getMyPrograms() {
		console.log("get programs ", await getPrograms());
		const res = await getPrograms();
		setData(res.data);
	}
	useEffect(() => {
		getMyPrograms();
	}, []);
	return (
		<Layout>
			<ProgramList programs={data} />
		</Layout>
	);
}

// export async function getStaticPaths() {
// 	// Call an external API endpoint to get posts
// 	const res = await getPrograms();
// 	const programs = await res.data;

// 	// Get the paths we want to pre-render based on posts
// 	const paths = programs.map((program: any) => ({
// 		params: { id: program.id },
// 	}));

// 	// We'll pre-render only these paths at build time.
// 	// { fallback: false } means other routes should 404.
// 	return { paths, fallback: false };
// }
// export const getServerSideProps: GetServerSideProps = async () => {
// 	const { data } = await getPrograms();

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };

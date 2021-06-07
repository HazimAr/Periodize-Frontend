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

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const { data } = await getPrograms();

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };

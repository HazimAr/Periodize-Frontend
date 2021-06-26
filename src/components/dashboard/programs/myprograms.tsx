import { getPrograms } from "@api/program";
import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-default-export
export default function MyPrograms(): JSX.Element {
	const [programs, setPrograms] = useState();
	useEffect(() => {
		getPrograms().then((data) => setPrograms(data.data));
	}, []);

	useEffect(() => {
		console.log(programs);
	}, [programs]);
	return (
		<Box>
			<Heading size="lg" mb={4}>
				My Programs
			</Heading>
		</Box>
	);
}

import { Text } from "@chakra-ui/react";
import Foot from "@components/home/foot";
import Head from "@components/home/head";

export default function About(): JSX.Element {
	return (
		<>
			<Head />
			<div>
				About<Text variant="bnw">Congrats foo</Text>
			</div>
			<Foot />
		</>
	);
}

import Head from "@components/home/head";
import Foot from "@components/home/foot";
import { Text } from "@chakra-ui/react";

export default function About(): JSX.Element {
	return (
		<>
			<Head />
			<div>
				About <Text variant="bnw">Hello testing color</Text>
			</div>
			<Foot />
		</>
	);
}

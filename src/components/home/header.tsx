import { Heading, HStack, Image } from "@chakra-ui/react";
import Container from "./container";

export default function header(): JSX.Element {
	return (
		<Container as="header">
			<HStack justify="space-between" align="center" w="100%">
				<Image src="logo.png" w="100px" />
				<Heading>Periodize</Heading>
				<HStack></HStack>
			</HStack>
		</Container>
	);
}

import { Heading, HStack, Image } from "@chakra-ui/react";
import Container from "./container";

export default function header(): JSX.Element {
	return (
		<Container as="header">
			<HStack justify="space-between">
				<Image src="logo.png" w="50px" />
				<Heading>Periodize</Heading>
				<HStack></HStack>
			</HStack>
		</Container>
	);
}

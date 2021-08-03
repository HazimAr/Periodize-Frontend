import { Heading, HStack, Image, Button} from "@chakra-ui/react";
import NextChakraLink from "@components/link";
import Container from "./container";

export default function header(): JSX.Element {
	return (
		<Container as="header">
			<HStack justify="space-between" align="center" w="100%">
				<Image src="logo.png" w="100px" />
				<Heading>Periodize</Heading>
				<HStack>
					<NextChakraLink href="/login">Login</NextChakraLink>
					<NextChakraLink href="/register">
						<Button>
							Get Started
						</Button>
					</NextChakraLink>
				</HStack>
			</HStack>
		</Container>
	);
}

import { Flex, Text, Box, Heading, Button } from "@chakra-ui/react";

export default function CarouselCenter(): JSX.Element {
	return (
		<Flex justify="center" my="80px">
			<Flex
				w="90%"
				m="auto"
				// h="500px"
				justify="space-evenly"
				align="center"
				flexDir={{ base: "column", sm: "row", md: "row" }}
			>
				<Box
					bg="linear-gradient(to bottom right, #8c00ff7b, #9977ce
)"
					// w={["100%", "33%"]}
					w="100%"
					h="350px"
					borderRadius="10px"
					mx={["", "10px", "20px"]}
					my={{ base: "10px" }}
				>
					<Heading my="5px">hi</Heading>
					<Text>Cutie</Text>
					<Button mt="20px">Noa</Button>
				</Box>
				<Box
					bg="linear-gradient(to bottom right, #8c00ff7b, #cf9f9fcc)"
					// w={["100%", "33%"]}
					w="100%"
					h="350px"
					borderRadius="10px"
					mx={["", "10px", "20px"]}
					my={{ base: "10px" }}
				>
					<Heading my="5px">howdy</Heading>
					<Text>Cutie</Text>
					<Button mt="20px">Was</Button>
				</Box>
				<Box
					bg="linear-gradient(to bottom right, #8c00ff7b, #7cadc4cc)"
					// w={["100%", "33%"]}
					w="100%"
					h="350px"
					borderRadius="10px"
					mx={["", "10px", "20px"]}
					my={{ base: "10px" }}
				>
					<Heading my="5px">hola</Heading>
					<Text>Cutie</Text>
					<Button mt="20px">Here</Button>
				</Box>
			</Flex>
		</Flex>
	);
}

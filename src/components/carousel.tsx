import { Flex, Text, Box, Heading, Button } from "@chakra-ui/react";

export default function CarouselCenter(): JSX.Element {
	return (
		<Flex justify="center" my="80px">
			<Flex
				w="900px"
				h="500px"
				bg="linear-gradient(#291947, #6f35db99)"
				borderRadius="20px"
				justify="space-evenly"
				align="center"
			>
				<Box
					bg="linear-gradient(to bottom right, #8c00ff7b, #9977ce
)"
					w="200px"
					h="350px"
					borderRadius="10px"
				>
					<Heading my="5px">hi</Heading>
					<Text>Cutie</Text>
					<Button mt="20px">Noa</Button>
				</Box>
				<Box
					bg="linear-gradient(to bottom right, #8c00ff7b, #cf9f9fcc)"
					w="200px"
					h="350px"
					borderRadius="10px"
				>
					<Heading my="5px">howdy</Heading>
					<Text>Cutie</Text>
					<Button mt="20px">Was</Button>
				</Box>
				<Box
					bg="linear-gradient(to bottom right, #8c00ff7b, #7cadc4cc)"
					w="200px"
					h="350px"
					borderRadius="10px"
				>
					<Heading my="5px">hola</Heading>
					<Text>Cutie</Text>
					<Button mt="20px">Here</Button>
				</Box>
			</Flex>
		</Flex>
	);
}

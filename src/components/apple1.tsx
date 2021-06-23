import { Flex, Text, Box, Heading, Button, SimpleGrid } from "@chakra-ui/react";

export default function AppleBox1(): JSX.Element {
	return (
		
		<SimpleGrid columns={{md: 1, lg: 2}} spacing={2} my="20px">
			<Box
				borderRadius="10px"
				bg="linear-gradient(to bottom right, #8c00ff7b, #cf9f9fcc)"
				height="500px"
			></Box>
			<Box
				borderRadius="10px"
				bg="linear-gradient(to bottom right, #8c00ff7b, #7cadc4cc)"
				height="500px"
			></Box>
			<Box
				borderRadius="10px"
				bg="linear-gradient(to bottom right, #0026ff7a, #7ca7c4cc)"
				height="500px"
			></Box>
			<Box
				borderRadius="10px"
				bg="linear-gradient(to bottom right, #0026ff7a, #7cadc4cc)"
				height="500px"
			></Box>
		</SimpleGrid>
		
	);
}

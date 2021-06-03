import {
	Container,
	Box,
	FormControl,
	Input,
	HStack,
	Center,
	FormLabel,
	Textarea,
	Flex,
	Text,
	Heading,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Glass from "@components/glassbg";
export default function CreateForm() {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");

	useEffect(() => {
		setName("");
		setDesc("");
	}, []);

	return (
		<Flex
			// bgGradient="linear(to-r, #45cfb6, #6cdbeb)"
			// objectFit="cover"
			justify="center"
			align="center"
			bgColor="#0d062e"
			// bgImage="/galaxy.jpg"
			w="900px"
		>
			{/* <Container> */}
			<Glass w="600px" h="300px">
				<Container>
					<Heading
						as="h3"
						size="xl"
						color="purple.900"
						mb={4}
						opacity="0.7"
					>
						Create your template
					</Heading>

					<form>
						<FormControl>
							<FormLabel htmlFor="name" color="blue.400">
								Name
							</FormLabel>
							<Input
								placeholder="Starting Strength 5x5"
								value={name}
								color="blue.400"
								_placeholder={{ color: "blue.300" }}
								onChange={(e) => setName(e.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="description" color="blue.400">
								description
							</FormLabel>
							<Textarea
								placeholder="Starting Strength 5x5"
								value={desc}
								color="blue.400"
								_placeholder={{ color: "blue.300" }}
								onChange={(e) => setDesc(e.target.value)}
							/>
						</FormControl>
					</form>
					<HStack spacing={4}>
						<Center
							w="150px"
							height="100px"
							bgGradient="linear(to-bl, orange.300, orange.500)"
							borderRadius="10px"
						>
							Quick Workout
						</Center>
						<Center
							w="150px"
							height="100px"
							bgGradient="linear(to-bl, green.300, green.500)"
							borderRadius="10px"
						>
							Week Split
						</Center>
						<Center
							w="150px"
							height="100px"
							bgGradient="linear(to-bl, blue.300, blue.500)"
							borderRadius="10px"
						>
							Periodized Program
						</Center>
					</HStack>
				</Container>
			</Glass>
		</Flex>
	);
}

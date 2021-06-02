import {
	Container,
	Box,
	FormControl,
	Input,
	HStack,
	Center,
	FormLabel,
	Textarea,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function CreateForm() {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	return (
		<Container>
			<Box>Create A Program</Box>

			<form>
				<FormControl>
					<FormLabel htmlFor="name">Name</FormLabel>
					<Input placeholder="Starting Strength 5x5" value={name} />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="description">description</FormLabel>
					<Textarea
						placeholder="Starting Strength 5x5"
						value={name}
					/>
				</FormControl>
			</form>
			<HStack spacing={4}>
				<Center
					w="200px"
					height="150px"
					bg="tomato"
					borderRadius="10px"
				>
					Quick Workout
				</Center>
				<Center
					w="200px"
					height="150px"
					bg="green.300"
					borderRadius="10px"
				>
					Week Split
				</Center>
				<Center
					w="200px"
					height="150px"
					bg="blue.600"
					borderRadius="10px"
				>
					Periodized Program
				</Center>
			</HStack>
		</Container>
	);
}

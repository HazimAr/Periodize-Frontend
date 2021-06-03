import {
	Container,
	FormControl,
	Input,
	HStack,
	FormLabel,
	Textarea,
	Text,
	Heading,
	Checkbox,
	Button,
	CheckboxGroup,
	IconButton,
	VStack,
	chakra,
} from "@chakra-ui/react";

import { FaDumbbell } from "react-icons/fa";
import {
	GiWeightLiftingUp,
	GiRunningNinja,
	GiWeightLiftingDown,
} from "react-icons/gi";
import { useState, useEffect } from "react";

const CWeightlifting = chakra(GiWeightLiftingUp);
const CPowerlifting = chakra(GiWeightLiftingDown);
const CBodybuilding = chakra(FaDumbbell);
const CCardio = chakra(GiRunningNinja);
export default function CreateForm() {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [beg, setBeg] = useState(false);
	const [int, setInt] = useState(false);
	const [adv, setAdv] = useState(false);
	const [tags, setTags]: any = useState([]);
	useEffect(() => {
		console.log(tags);
	}, [tags]);

	function handleTags(t: string) {
		if (tags.includes(t)) {
			setTags(tags.filter((item: any) => item != t));
			return;
		}

		setTags((tag: any) => [...tag, t]);
	}
	return (
		<Container>
			<Heading as="h3" size="lg" color="white" mb={4} opacity="0.7">
				Create your template
			</Heading>

			<form>
				<VStack spacing={2} alignItems="left">
					<FormControl>
						<FormLabel htmlFor="name" color="white">
							Name
						</FormLabel>
						<Input
							placeholder="Starting Strength 5x5"
							value={name}
							color="white"
							_placeholder={{ color: "white" }}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="description" color="white">
							Summary
						</FormLabel>
						<Textarea
							placeholder=""
							value={desc}
							color="white"
							_placeholder={{ color: "white" }}
							onChange={(e) => setDesc(e.target.value)}
						/>
					</FormControl>
					<HStack>
						<CheckboxGroup>
							<Checkbox
								colorScheme="green"
								isChecked={beg}
								onChange={() => setBeg(!beg)}
								color="white"
							>
								Beginner
							</Checkbox>
							<Checkbox
								colorScheme="blue"
								isChecked={int}
								onChange={() => setInt(!int)}
								color="white"
							>
								Intermediate
							</Checkbox>
							<Checkbox
								colorScheme="red"
								isChecked={adv}
								onChange={() => setAdv(!adv)}
								color="white"
							>
								Advanced
							</Checkbox>
						</CheckboxGroup>
					</HStack>
					<Text textAlign="left">Tags</Text>
					<HStack spacing={2} alignItems="center" wrap="wrap">
						<VStack>
							<IconButton
								aria-label="gains"
								size="lg"
								variant="outline"
								icon={<CBodybuilding />}
								_focus={{ outline: "none" }}
								onClick={() => handleTags("bodybuilding")}
								bg={
									tags.includes("bodybuilding")
										? "purple.500"
										: ""
								}
							/>
							<Text fontSize="10px">BodyBuilding</Text>
						</VStack>
						<VStack>
							<IconButton
								aria-label="gains"
								size="lg"
								variant="outline"
								icon={<CWeightlifting />}
								_focus={{ outline: "none" }}
								onClick={() => handleTags("weightlifting")}
								bg={
									tags.includes("weightlifting")
										? "purple.500"
										: ""
								}
							/>
							<Text fontSize="10px">Weightlifting</Text>
						</VStack>
						<VStack>
							<IconButton
								aria-label="gains"
								size="lg"
								variant="outline"
								icon={<CPowerlifting />}
								_focus={{ outline: "none" }}
								onClick={() => handleTags("powerlifting")}
								bg={
									tags.includes("powerlifting")
										? "purple.500"
										: ""
								}
							/>
							<Text fontSize="10px">Powerlifting</Text>
						</VStack>
						<VStack>
							<IconButton
								aria-label="gains"
								size="lg"
								variant="outline"
								icon={<CCardio />}
								_focus={{ outline: "none" }}
								onClick={() => handleTags("cardio")}
								bg={tags.includes("cardio") ? "purple.500" : ""}
							/>
							<Text fontSize="10px">Cardio</Text>
						</VStack>
					</HStack>
				</VStack>

				<Button
					my={4}
					bg="purple.500"
					onClick={() => {
						console.log("test");
					}}
				>
					Create
				</Button>
			</form>
		</Container>
	);
}

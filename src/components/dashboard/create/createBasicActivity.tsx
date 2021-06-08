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
	Flex,
} from "@chakra-ui/react";

import { FaDumbbell } from "react-icons/fa";
import {
	GiWeightLiftingUp,
	GiRunningNinja,
	GiWeightLiftingDown,
} from "react-icons/gi";
import { useState } from "react";
import Pop from "@components/pop";
import { createProgram } from "@api/program";
import GlassBgBox from "@components/glassbg";

const CWeightlifting = chakra(GiWeightLiftingUp);
const CPowerlifting = chakra(GiWeightLiftingDown);
const CBodybuilding = chakra(FaDumbbell);
const CCardio = chakra(GiRunningNinja);
export default function CreateForm(props: any) {
	const [activity, setActivity] = useState("");
	const [load, setLoad] = useState("");
	const [set, setSet] = useState("");
	const [rep, setRep] = useState("");

	return (
		<Container>
			<Heading as="h3" size="lg" mb={4} opacity="0.7">
				Basic Program
			</Heading>
			<GlassBgBox p="18px" op={0.08}>
				<Heading>Add Activity</Heading>
				<Input
					value={activity}
					onChange={(e) => setActivity(e.target.value)}
					my="8px"
					focusBorderColor="brand.300"
				/>
				<Input
					value={load}
					onChange={(e) => setLoad(e.target.value)}
					my="8px"
				/>
				<HStack spacing="12px" my="8px">
					<Input
						value={set}
						onChange={(e) => setSet(e.target.value)}
					/>
					<Text>X</Text>
					<Input
						value={rep}
						onChange={(e) => setRep(e.target.value)}
					/>
				</HStack>
			</GlassBgBox>
			<form onSubmit={(e) => {}}></form>
		</Container>
	);
}

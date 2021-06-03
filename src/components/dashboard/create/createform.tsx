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
	Stack,
	Checkbox,
	CheckboxGroup,
	IconButton,
	Spacer,
	VStack,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import Glass from "@components/glassbg";

import { motion, AnimatePresence } from "framer-motion";
import Button from "@components/styledbutton";
export default function CreateForm() {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [beg, setBeg] = useState(false);
	const [int, setInt] = useState(false);
	const [adv, setAdv] = useState(false);
	const [step, setStep] = useState(0);
	const [format, setFormat] = useState("");
	useEffect(() => {
		console.log(format);
	}, [format]);

	function handleFormat(exp: string) {
		if (format == exp) {
			setFormat("");
			return;
		}
		setFormat(exp);
	}

	let body;

	return (
		<Flex
			// bgGradient="linear(to-r, #45cfb6, #6cdbeb)"
			// objectFit="cover"
			justify="center"
			align="center"
			// bgColor="#0d062e"
			bgImage="/galaxy.jpg"
			w="900px"
			height="100vh"
		>
			<Glass w="600px" height="500px">
				<Container>
					<Heading
						as="h3"
						size="xl"
						color="white"
						mb={4}
						opacity="0.7"
					>
						Create your template
					</Heading>

					<form>
						{step == 0 && (
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
										onChange={(e) =>
											setName(e.target.value)
										}
										required
									/>
								</FormControl>
								<FormControl>
									<FormLabel
										htmlFor="description"
										color="white"
									>
										Summary
									</FormLabel>
									<Textarea
										placeholder=""
										value={desc}
										color="white"
										_placeholder={{ color: "white" }}
										onChange={(e) =>
											setDesc(e.target.value)
										}
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
							</VStack>
						)}
						{step == 1 && (
							<VStack alignItems="left">
								<Button
									as="div"
									name="beg"
									// bg="transparent"
									bgGradient={
										format == "beg"
											? "linear(to-bl, orange.300, orange.500)"
											: ""
									}
									_hover={{ bg: "inherit" }}
									_focus={{
										boxShadow:
											"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
									}}
									borderRadius="10px"
									height="100px"
									border={format == "beg" ? "1px" : ""}
									onClick={() => handleFormat("beg")}
								>
									Quick Workout
								</Button>
								<Button
									as="div"
									bgGradient={
										format == "int"
											? "linear(to-bl, green.300, green.500)"
											: ""
									}
									borderRadius="10px"
									height="100px"
									// variant={
									// 	format == "int" ? "solid" : "outline"
									// }
									onClick={() => handleFormat("int")}
								>
									Week Split
								</Button>
								<Button
									as="div"
									bgGradient={
										format == "adv"
											? "linear(to-bl, blue.300, blue.500)"
											: ""
									}
									borderRadius="10px"
									height="100px"
									// _hover={{ bg: "orange.200" }}
									// variant={
									// 	format == "int" ? "solid" : "outline"
									// }
									onClick={() => handleFormat("adv")}
								>
									Periodized Program
								</Button>
							</VStack>
						)}
						{step == 2 ? <Step3 /> : null}
						<HStack mt={4}>
							{step > 0 ? (
								<IconButton
									aria-label="last step"
									icon={<ArrowLeftIcon />}
									onClick={() => setStep(step - 1)}
									variant="ghost"
								/>
							) : null}
							<Spacer />
							<IconButton
								aria-label="next step"
								icon={<ArrowRightIcon />}
								onClick={() => setStep(step + 1)}
								variant="ghost"
							/>
						</HStack>
					</form>
				</Container>
			</Glass>
		</Flex>
	);
}

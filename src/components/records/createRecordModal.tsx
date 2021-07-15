import { CloseIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { ReactElement, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsSearch } from "react-icons/bs";
import * as Yup from "yup";
import FormikNumberInput from "../formiknumberinput";

const formSchema = Yup.object().shape({
	load: Yup.number()
		.min(1, "too short")
		.required("Required")
		.positive("Provide a positive number")
		.max(25, "Too long!"),
	warmup: Yup.number()
		.min(1, "too short")
		.positive("Provide a positive number")
		.max(99, "Too long!"),
	sets: Yup.number()
		.min(1, "Atleast do one set!")
		.required("Required")
		.max(999, "Too long!")
		.positive("Has to be positive")
		.integer("Has to be an integer"),
	reps: Yup.number()
		.min(1, "too short")
		.required("Required")
		.max(999, "Too long!")
		.positive("Has to be positive")
		.integer("Has to be an integer"),
	rpe: Yup.number().min(1, "too short").max(10, "Too long!"),
	percent: Yup.number()
		.min(1, "Value must be between 1-100")
		.max(100, "Value must be between 1-100"),
	// validate date
});
interface formInput {
	load: string;
	warmup: string;
	sets: string;
	reps: string;
	rpe: string;
	datePerformed: string;
}
const initialValues: formInput = {
	load: "",
	warmup: "",
	sets: "",
	reps: "",
	rpe: "5",
	datePerformed: "",
};

export default function CreateRecordFormModal(props: any): ReactElement {
	// const startD = new Date();
	const [startDate, setStartDate] = useState(new Date());
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen}>Create Record</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={initialValues}
							onSubmit={(values, actions) => {
								// onClose();
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									actions.setSubmitting(false);
								}, 1000);
							}}
							validationSchema={formSchema}
							validateOnChange={false}
							validateOnBlur={false}
						>
							{({ values, errors, isSubmitting }) => (
								<Form>
									<Box
										maxW="5xl"
										borderRadius="25px"
										py="30px"
									>
										<VStack spacing={2}>
											<Heading size="lg" my="20px">
												Create Record
											</Heading>
											<InputGroup size="md">
												<InputLeftElement pointerEvents="none">
													<BsSearch opacity={0.5} />
												</InputLeftElement>

												<Input
													rounded="md"
													placeholder="Search your lifts"
													_placeholder={{
														opacity: 1,
													}}
													//   value={query}
													//   onChange={handleOnSearch}
												/>
												<InputRightElement>
													<IconButton
														aria-label="clear search"
														icon={<CloseIcon />}
														// onClick={() => setQuery("")}
														_focus={{
															outline: "none",
														}}
														variant="ghost"
													/>
												</InputRightElement>
											</InputGroup>
											<Flex>
												<VStack mx="10px">
													<FormLabel>Load </FormLabel>
													<Field
														name="load"
														component={
															FormikNumberInput
														}
													/>
												</VStack>
											</Flex>
											<Flex>
												<VStack mx="10px">
													<FormLabel>Sets </FormLabel>
													<Field
														name="sets"
														component={
															FormikNumberInput
														}
													/>
												</VStack>
												<VStack mx="10px">
													<FormLabel>Reps </FormLabel>
													<Field
														name="reps"
														component={
															FormikNumberInput
														}
													/>
												</VStack>
											</Flex>
											<VStack mx="10px">
												<FormLabel>Warmup </FormLabel>
												<Field
													name="warmup"
													component={
														FormikNumberInput
													}
												/>
											</VStack>
											<Slider
												aria-label="rpe slider"
												defaultValue={5}
												min={1}
												max={10}
												step={1}
												onChangeEnd={(val) =>
													console.log(val)
												}
											>
												<SliderTrack>
													<SliderFilledTrack />
												</SliderTrack>
												<SliderThumb />
											</Slider>
											<Flex>
												<VStack>
													<Text>Date </Text>
													<Box color="black">
														<DatePicker
															selected={startDate}
															onChange={(date) =>
																setStartDate(
																	date
																)
															}
															maxDate={new Date()}
															showDisabledMonthNavigation
														/>
													</Box>
												</VStack>
											</Flex>
											<Box>
												<Button
													type="submit"
													my="10px"
													bg="brand.200"
													color="brand.600"
												>
													Submit
												</Button>
											</Box>
										</VStack>
									</Box>

									<pre>{JSON.stringify(values, null, 2)}</pre>

									{/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
								</Form>
							)}
						</Formik>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
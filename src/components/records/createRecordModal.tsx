import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { CreateRecordInput, CreateRecordMutation } from "API";
import { API } from "aws-amplify";
import { Field, Form, Formik } from "formik";
import { createRecord } from "graphql/mutations";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { ReactElement, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import FormikNumberInput from "../formiknumberinput";
const formSchema = Yup.object().shape({
	load: Yup.number()
		.min(1, "too short")
		.required("Required")
		.positive("Provide a positive number")
		.max(9999, "Too long!"),
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
	// percent: Yup.number()
	// 	.min(1, "Value must be between 1-100")
	// 	.max(100, "Value must be between 1-100"),
	// validate date
});
interface formInput {
	load: string;
	warmup: string;
	sets: string;
	reps: string;
	rpe: string;
}
const initialValues: formInput = {
	load: "",
	warmup: "",
	sets: "",
	reps: "",
	rpe: "5",
};

export default function CreateRecordFormModal(props: any): ReactElement {
	// const startD = new Date();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [startDate, setStartDate] = useState(new Date());

	const marks = {
		1: "1",
		2: "2",
		3: "3",
		4: "4",
		5: "5",
		6: "6",
		7: "7",
		8: "8",
		9: "9",
		10: "10",
	};
	const [rpeValue, setRpeValue] = useState(5);

	useEffect(() => {
		console.log(startDate);
	}, [startDate]);
	return (
		<>
			<IconButton
				aria-label="add record"
				onClick={onOpen}
				size="sm"
				icon={<AddIcon />}
				_focus={{ outline: "none" }}
				variant="ghost"
				zIndex={100}
			/>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={initialValues}
							onSubmit={async (values, actions) => {
								// onClose();
								try {
									console.log(
										"form values: ",
										JSON.stringify(values, null, 2)
									);
									//set a valid date and iterate of the object for the input
									const newRecordInput: CreateRecordInput = {
										load: parseFloat(values.load),
										sets: parseInt(values.sets),
										reps: parseInt(values.reps),
										performedDate: startDate.toISOString(),
										rpe: rpeValue,
										liftID: props.lift.id,
									};

									const createNewRecord = (await API.graphql({
										query: createRecord,
										variables: {
											input: newRecordInput,
										},
										authMode:
											GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
									})) as { data: CreateRecordMutation };

									console.log(createNewRecord);
									//setLifts to remove the lift (only if this modal is on the lifts page)
									// props.setLifts([
									// 	...props.lifts,
									// 	createNewRecord.data
									// 		.createRecord as Record,
									// ]);
									actions.setSubmitting(false);
									onClose();
								} catch (error) {
									console.log("Create record error: ", error);
								}

								actions.setSubmitting(false);
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
											<Heading size="md" my="20px">
												Create Record for{" "}
												{props.lift.name}
											</Heading>
											{/* <InputGroup size="md">
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
											</InputGroup> */}
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

											<VStack
												width="100%"
												alignItems="stretch"
												pb={5}
											>
												<FormLabel>RPE </FormLabel>
												<Slider
													dots
													min={1}
													max={10}
													marks={marks}
													step={0.5}
													value={rpeValue}
													included={false}
													onChange={setRpeValue}
												/>
											</VStack>

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
													disabled={isSubmitting}
												>
													Submit
												</Button>
											</Box>
										</VStack>
									</Box>
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

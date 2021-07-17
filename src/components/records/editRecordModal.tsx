import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { EditIcon } from "@chakra-ui/icons";
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
import { CreateRecordMutation, UpdateRecordInput } from "API";
import { API } from "aws-amplify";
import { Field, Form, Formik } from "formik";
import { updateRecord } from "graphql/mutations";
import React, { ReactElement, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import { Record } from "../../API";
import FormikNumberInput from "../formiknumberinput";
const formSchema = Yup.object().shape({
	load: Yup.number()
		.min(1, "too short")
		.required("Required")
		.positive("Provide a positive number")
		.max(9999, "Too long!"),
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
	// percent: Yup.number()
	// 	.min(1, "Value must be between 1-100")
	// 	.max(100, "Value must be between 1-100"),
	// validate date
});
interface formInput {
	load: string;
	sets: string;
	reps: string;
	rpe: string;
}

interface Props {
	record: Record;
}
export default function EditRecordFormModal({ record }: Props): ReactElement {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [startDate, setStartDate] = useState(new Date());

	useEffect(() => {
		console.log(startDate);
	}, [startDate]);
	const initialValues: formInput = {
		load: record.load.toString(),
		sets: record.sets.toString(),
		reps: record.reps.toString(),
		rpe: record.rpe.toString(),
	};
	return (
		<>
			<IconButton
				aria-label="add record"
				onClick={onOpen}
				size="sm"
				icon={<EditIcon />}
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
									const newRecordInput: UpdateRecordInput = {
										load: parseFloat(values.load),
										sets: parseInt(values.sets),
										reps: parseInt(values.reps),
										performedDate: startDate.toISOString(),
										rpe:
											values.rpe === ""
												? null
												: parseInt(values.rpe),
										liftID: record.liftID,
										id: record.id,
									};

									const editRecord = (await API.graphql({
										query: updateRecord,
										variables: {
											input: newRecordInput,
										},
										authMode:
											GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
									})) as { data: CreateRecordMutation };

									console.log(editRecord);
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
												Edit Record
											</Heading>

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

											{/* <Slider
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
											</Slider> */}
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

									<pre>{JSON.stringify(values, null, 2)}</pre>

									<pre>{JSON.stringify(errors, null, 2)}</pre>
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

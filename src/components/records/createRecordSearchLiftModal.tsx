import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Stack,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import CLabelInput from "@components/cFormikLabelInput";
import { CreateRecordInput, CreateRecordMutation, Lift } from "API";
import { API } from "aws-amplify";
import { Field, Form, Formik } from "formik";
import Fuse from "fuse.js";
import { createRecord } from "graphql/mutations";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { ReactElement, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsSearch } from "react-icons/bs";
import * as Yup from "yup";
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
});
interface formInput {
	load: string;
	warmup: string;
	sets: string;
	reps: string;
	rpe?: string;
}
const initialValues: formInput = {
	load: "",
	warmup: "",
	sets: "",
	reps: "",
	rpe: "5",
};
interface Props {
	lifts: Lift[];
	fetchMyLifts: any;
}
export default function CreateRecordSearchLiftModal({
	lifts,
	fetchMyLifts,
}: Props): ReactElement {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [startDate, setStartDate] = useState(new Date());
	const [selectedLift, setSelectedLift] = useState<Lift | null>(null);
	const [error, showError] = useState(false);
	const [displayOptions, setDisplayOptions] = useState(false);
	const [query, setQuery] = useState("");

	const fuse = new Fuse(lifts, {
		keys: ["name"],
		includeScore: true,
	});
	const results = fuse.search(query);
	const liftResults = query ? results.map((result) => result.item) : lifts;

	const options = [];
	for (let i = 0; i < lifts.length; i++) {
		options.push({ value: lifts[i].name, label: lifts[i].name });
	}
	function handleOnSearch({ currentTarget }) {
		const { value } = currentTarget;
		setQuery(value);
	}
	const handleSelect = (lift) => {
		setQuery(lift.name);
		setSelectedLift(lift);
	};

	const handleClearQuery = () => {
		setQuery("");
		setSelectedLift(null);
	};
	function handleError() {
		showError(true);
		setTimeout(() => showError(false), 3000);
	}
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

	return (
		<>
			<Button
				leftIcon={<AddIcon />}
				colorScheme="teal"
				variant="outline"
				onClick={onOpen}
				size="sm"
				_focus={{ outline: "none" }}
			>
				Record
			</Button>
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
										liftID: selectedLift.id,
									};

									const createNewRecord = (await API.graphql({
										query: createRecord,
										variables: {
											input: newRecordInput,
										},
										authMode:
											GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
									})) as {
										data: CreateRecordMutation;
									};

									console.log(createNewRecord);
									//setLifts to remove the lift (only if this modal is on the lifts page)
									// props.setLifts([
									// 	...props.lifts,
									// 	createNewRecord.data
									// 		.createRecord as Record,
									// ]);
									fetchMyLifts();
									setQuery("");
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
												Create Record
											</Heading>
											<InputGroup
												size="md"
												borderColor={error ? "red" : ""}
											>
												<InputLeftElement pointerEvents="none">
													<BsSearch opacity={0.5} />
												</InputLeftElement>

												<Input
													rounded="md"
													placeholder="Search your lifts"
													_placeholder={{
														opacity: 1,
													}}
													value={query}
													onChange={handleOnSearch}
												/>
												<InputRightElement>
													<IconButton
														aria-label="clear search"
														icon={<CloseIcon />}
														onClick={
															handleClearQuery
														}
														_focus={{
															outline: "none",
														}}
														variant="ghost"
													/>
												</InputRightElement>
											</InputGroup>
											{(query.length > 0 &&
												!selectedLift) ||
											(selectedLift &&
												selectedLift.name !== query) ? (
												<Box
													border="1px solid white"
													w="100%"
												>
													{liftResults.length > 0 ? (
														<Stack as="ul" w="100%">
															{liftResults.map(
																(lift) => (
																	<Box
																		key={
																			lift.id
																		}
																		py={1}
																		as="button"
																		_hover={{
																			bg: "gray.600",
																		}}
																		textAlign="center"
																		onClick={() =>
																			handleSelect(
																				lift
																			)
																		}
																	>
																		{
																			lift.name
																		}
																	</Box>
																)
															)}
														</Stack>
													) : (
														<Box py={2}>
															No lift found 🙄
														</Box>
													)}
												</Box>
											) : null}

											<HStack spacing={1}>
												<Field
													name="load"
													component={CLabelInput}
													label="load"
													numinput={true}
												/>

												<Field
													name="sets"
													component={CLabelInput}
													label="sets"
													numinput={true}
												/>

												<Field
													name="reps"
													component={CLabelInput}
													label="reps"
													numinput={true}
												/>
											</HStack>

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
											{/* <pre>
												{JSON.stringify(
													values,
													null,
													2
												)}
											</pre> */}
										</VStack>
									</Box>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

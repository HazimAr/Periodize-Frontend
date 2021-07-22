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
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { CreateRecordInput, CreateRecordMutation, Lift } from "API";
import { API } from "aws-amplify";
import { Field, Form, Formik } from "formik";
import Fuse from "fuse.js";
import { createRecord } from "graphql/mutations";
import React, { ReactElement, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsSearch } from "react-icons/bs";
// import Select from "react-select";
import * as Yup from "yup";
import FormikNumberInput from "../formiknumberinput";
const formSchema = Yup.object().shape({
	load: Yup.number()
		.min(1, "too short")
		.required("Required")
		.positive("Provide a positive number")
		.max(9999, "Too long!"),
});
interface formInput {
	load: string;
}
const initialValues: formInput = {
	load: "",
};

interface Props {
	lifts: Lift[];
}
export default function PRModal({ lifts }: Props): ReactElement {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [startDate, setStartDate] = useState(new Date());
	const [selectedLift, setSelectedLift] = useState<Lift | null>(null);
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

	// useEffect(() => {
	// 	if (selectedLift.name === query) {
	// 		setDisplayOptions(false);
	// 	}
	// }, [query]);
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
										sets: 1,
										reps: 1,
										performedDate: startDate.toISOString(),
										rpe: 10,
										liftID: selectedLift.id,
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
												Add 1RM
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
													value={query}
													onChange={handleOnSearch}
												/>
												<InputRightElement>
													<IconButton
														aria-label="clear search"
														icon={<CloseIcon />}
														onClick={() =>
															setQuery("")
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

											<Box>
												<Flex align="center">
													<HStack mx="4px">
														<FormLabel>
															Weight
														</FormLabel>
														<Field
															name="load"
															component={
																FormikNumberInput
															}
														/>
													</HStack>

													<Box w="120px">
														<DatePicker
															selected={startDate}
															onChange={(date) =>
																setStartDate(
																	date
																)
															}
															maxDate={new Date()}
															showDisabledMonthNavigation
															customInput={
																<Input />
															}
														/>
													</Box>
												</Flex>

												<Box>
													<Button
														type="submit"
														my="10px"
														// bg="brand.200"
														color="brand.200"
														borderColor="brand.200"
														// colorScheme="purple.300"
														disabled={isSubmitting}
														variant="outline"
													>
														Add New 1RM
													</Button>
												</Box>
											</Box>
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

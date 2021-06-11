import {
	Container,
	FormControl,
	Input,
	HStack,
	FormLabel,
	Textarea,
	Text,
	Heading,
	Button,
	IconButton,
	VStack,
	Flex,
	FormErrorMessage,
	InputGroup,
	InputLeftAddon,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
	FieldArray,
	ErrorMessage,
	replace,
} from "formik";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { BiNote } from "react-icons/bi";
import Pop from "@components/pop";
import { createProgram } from "@api/program";
import GlassBgBox from "@components/glassbg";
import * as Yup from "yup";
export default function CreateForm(props: any) {
	function validateName(value: string) {
		let error;
		if (!value) {
			error = "Name is required";
		} else if (value.length > 5) {
			error = "Program name too long!😱";
		}
		return error;
	}
	const schema = Yup.object().shape({
		lifts: Yup.array()
			.of(
				Yup.object().shape({
					name: Yup.string().min(4, "too short").required("Required"), // these constraints take precedence
					load: Yup.number().required().positive
					})
			)
			.required("Must have friends") // these constraints are shown if and only if inner constraints are satisfied
			.min(3, "Minimum of 3 friends"),
	});
	interface MyFormValues {
		lifts: [
			{
				name: string;
				load: string;
				sets: string;
				reps: string;
				rest: string;
				note: string;
				hideNote: boolean;
				unit: string;
			}
		];
	}
	const initialValues: MyFormValues = {
		lifts: [
			{
				name: "",
				load: "",
				sets: "5",
				reps: "5",
				rest: "",
				note: "",
				hideNote: true,
				unit: "lb",
			},
		],
	};
	return (
		<Container>
			<Heading as="h3" size="lg" mb={4} opacity="0.7">
				Basic Program
			</Heading>
			<GlassBgBox p="18px" op={0.08}>
				<Formik
					initialValues={initialValues}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					{({
						values,
						setFieldValue,
						isSubmitting,
						errors,
						touched,
						isValidating,
					}) => (
						<Form>
							<FieldArray name="lifts">
								{({ insert, remove, push }) => (
									<div>
										<Flex justify="flex-end" w="100%">
											<IconButton
												aria-label="add"
												icon={<AddIcon />}
												type="button"
												onClick={() =>
													push({
														note: "",
														name: "",
														load: "",
														set: "",
														reps: "",
														rest: "",
														hideNote: true,
														unit: "lb",
													})
												}
											>
												Add activity
											</IconButton>
										</Flex>
										{values.lifts.length > 0 &&
											values.lifts.map((lift, index) => (
												<VStack
													key={index}
													mb="32px"
													spacing="16px"
													w="100%"
												>
													<Field
														name={`lifts.${index}.name`}
														validate={validateName}
													>
														{({
															field,
															form,
														}: any) => (
															<FormControl
																isInvalid={
																	form.errors
																		.name &&
																	form.touched
																		.name
																}
															>
																<Flex
																	justify="space-between"
																	align="center"
																>
																	<FormLabel
																		htmlFor={`lifts.${index}.name`}
																	>
																		{index +
																			1}
																	</FormLabel>
																	<Flex align="center">
																		<IconButton
																			variant="ghost"
																			aria-label="add note"
																			icon={
																				<BiNote />
																			}
																			type="button"
																			onClick={() =>
																				//set hideNote
																				setFieldValue(
																					`lifts[${index}].hideNote`,
																					!lift.hideNote
																				)
																			}
																		/>
																		<IconButton
																			variant="ghost"
																			aria-label="delete"
																			icon={
																				<DeleteIcon />
																			}
																			type="button"
																			onClick={() =>
																				remove(
																					index
																				)
																			}
																		>
																			X
																		</IconButton>
																	</Flex>
																</Flex>

																<Input
																	{...field}
																	id={
																		lift.name
																	}
																	placeholder={
																		lift.name
																	}
																	validate={
																		validateName
																	}
																/>
																<FormErrorMessage>
																	{
																		// errors.lifts[index].name
																	}
																</FormErrorMessage>
															</FormControl>
														)}
													</Field>

													<HStack
														spacing="10px"
														align="center"
													>
														<Field
															name={`lifts.${index}.sets`}
															// validate={
															// 	validateName
															// }
														>
															{({
																field,
																form,
															}) => (
																<FormControl
																	isInvalid={
																		form
																			.errors
																			.sets &&
																		form
																			.touched
																			.sets
																	}
																>
																	<InputGroup>
																		<InputLeftAddon
																			pointerEvents="none"
																			children={
																				<Text color="gray.300">
																					Sets
																				</Text>
																			}
																		/>
																		<NumberInput
																			{...field}
																			step={
																				1
																			}
																		>
																			<NumberInputField
																				{...field}
																			/>
																			<NumberInputStepper>
																				<NumberIncrementStepper />
																				<NumberDecrementStepper />
																			</NumberInputStepper>
																		</NumberInput>
																		<FormErrorMessage>
																			{
																				form
																					.errors
																					.sets
																			}
																		</FormErrorMessage>
																	</InputGroup>
																</FormControl>
															)}
														</Field>
														<Text>x</Text>
														<Field
															name={`lifts.${index}.reps`}
															// validate={
															// 	validateName
															// }
														>
															{({
																field,
																form,
															}) => (
																<FormControl
																	isInvalid={
																		form
																			.errors
																			.reps &&
																		form
																			.touched
																			.reps
																	}
																>
																	<InputGroup>
																		<InputLeftAddon
																			pointerEvents="none"
																			children={
																				<Text color="gray.300">
																					Reps
																				</Text>
																			}
																		/>
																		<NumberInput
																			{...field}
																			step={
																				1
																			}
																		>
																			<NumberInputField
																				{...field}
																			/>
																			<NumberInputStepper>
																				<NumberIncrementStepper
																					onClick={() =>
																						setFieldValue(
																							`lifts[${index}].reps`,
																							parseInt(
																								lift.reps
																							) +
																								1
																						)
																					}
																				/>
																				<NumberDecrementStepper
																					onClick={() =>
																						parseInt(
																							lift.reps
																						) >
																						1
																							? setFieldValue(
																									`lifts[${index}].reps`,
																									parseInt(
																										lift.reps
																									) -
																										1
																							  )
																							: console.log(
																									lift.reps
																							  )
																					}
																				/>
																			</NumberInputStepper>
																		</NumberInput>
																		<FormErrorMessage>
																			{
																				form
																					.errors
																					.reps
																			}
																		</FormErrorMessage>
																	</InputGroup>
																</FormControl>
															)}
														</Field>
													</HStack>
													<HStack
														spacing="10px"
														w="100%"
													>
														<Field
															name={`lifts.${index}.load`}
															// validate={
															// 	validateName
															// }
														>
															{({
																field,
																form,
															}) => (
																<FormControl
																	isInvalid={
																		form
																			.errors
																			.load &&
																		form
																			.touched
																			.load
																	}
																>
																	<InputGroup>
																		<InputLeftAddon
																			pointerEvents="none"
																			children={
																				<Text color="gray.300">
																					load
																				</Text>
																			}
																		/>
																		<Input
																			{...field}
																			id={`lifts.${index}.load`}
																			placeholder=""
																		/>
																		<FormErrorMessage>
																			{
																				form
																					.errors
																					.sets
																			}
																		</FormErrorMessage>
																	</InputGroup>
																</FormControl>
															)}
														</Field>
														<Text>@</Text>
														<Select>
															<option value="lb">
																lb
															</option>
															<option value="rpe">
																RPE
															</option>
															<option value="%">
																% of 1RM
															</option>
															<option value="meter">
																meters
															</option>
															<option value="mile">
																mile
															</option>
															<option value="foot">
																ft
															</option>
														</Select>
													</HStack>
													{lift.hideNote ? null : (
														<Field
															name={`lifts.${index}.note`}
															// validate={
															// 	validateName
															// }
														>
															{({
																field,
																form,
															}) => (
																<FormControl
																	isInvalid={
																		form
																			.errors
																			.note &&
																		form
																			.touched
																			.note
																	}
																>
																	<InputGroup>
																		<InputLeftAddon
																			pointerEvents="none"
																			children={
																				<Text color="gray.300">
																					note
																				</Text>
																			}
																		/>
																		<Input
																			{...field}
																			id={`lifts.${index}.note`}
																			placeholder=""
																		/>
																		<FormErrorMessage>
																			{
																				form
																					.errors
																					.sets
																			}
																		</FormErrorMessage>
																	</InputGroup>
																</FormControl>
															)}
														</Field>
													)}
												</VStack>
											))}
										<IconButton
											aria-label="add"
											icon={<AddIcon />}
											type="submit"
											onClick={() =>
												push({
													note: "",
													name: "",
													load: "",
													sets: "5",
													reps: "5",
													rest: "",
													hideNote: true,
													unit: "lb",
												})
											}
										>
											Add activity
										</IconButton>
									</div>
								)}
							</FieldArray>
							<Button
								type="submit"
								variant="outline"
								my="16px"
								isLoading={isSubmitting}
							>
								Submit
							</Button>
						</Form>
					)}
				</Formik>
			</GlassBgBox>
		</Container>
	);
}

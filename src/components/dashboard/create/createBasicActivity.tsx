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
	Box,
	FormErrorMessage,
	InputGroup,
	InputLeftAddon,
	Select,
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
import { FaDumbbell } from "react-icons/fa";
import { BiNote } from "react-icons/bi";
import {
	GiWeightLiftingUp,
	GiRunningNinja,
	GiWeightLiftingDown,
	GiLifeSupport,
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
				sets: "",
				reps: "",
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
						console.log({ values, actions });
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}}
				>
					{({ values, setFieldValue }) => (
						<Form>
							<FieldArray name="lifts">
								{({ insert, remove, push }) => (
									<div>
										{values.lifts.length > 0 &&
											values.lifts.map((lift, index) => (
												<VStack
													key={index}
													mb="32px"
													spacing="16px"
												>
													<Field
														name={`lifts.${index}.name`}
														// validate={
														// 	validateName
														// }
													>
														{({ field, form }) => (
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
																		Movement
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
																	id={`lifts.${index}.name`}
																	placeholder=""
																/>
																<FormErrorMessage>
																	{
																		form
																			.errors
																			.sets
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
																		<Input
																			{...field}
																			id={`lifts.${index}.sets`}
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
																		<Input
																			{...field}
																			id={`lifts.${index}.reps`}
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
													</HStack>
													<Flex
														justify="space-between"
														width="100%"
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
														</Select>
													</Flex>
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
												})
											}
										>
											Add activity
										</IconButton>
									</div>
								)}
							</FieldArray>
							<Button type="submit" variant="outline" my="16px">
								Submit
							</Button>
						</Form>
					)}
				</Formik>
			</GlassBgBox>
		</Container>
	);
}

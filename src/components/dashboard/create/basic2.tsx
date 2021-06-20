import {
	// Container,
	// HStack,
	// Text,
	Heading,
	Button,
	IconButton,
	// VStack,
	Flex,
	Box,
	FormErrorMessage,
	Input,
} from "@chakra-ui/react";
import {
	Formik,
	Form,
	Field,
	FieldArray,
	useFormikContext,
	FieldArrayRenderProps,
	FormikContext,
} from "formik";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { BiNote } from "react-icons/bi";
// import { createProgram } from "@api/program";
import { useState } from "react";
import GlassBgBox from "@components/glassbg";
import * as Yup from "yup";
// import CNumberInput from "@components/formiknumberinput";
import CFormikInput from "@components/formikinput";
// import CFormikUnitSelect from "@components/unitselectoptions";
import CFormikSplitSelect from "@components/splitselectoptions";
import BasicModal from "@components/basicmodal";
import { setDayOfYear } from "date-fns/esm";
export default function CreateForm() {
	const ProgramSchema = Yup.object().shape({
		title: Yup.string(),
		description: Yup.string(),
		preset: Yup.string(),
		days: Yup.array().of(
			Yup.object().shape({
				dayName: Yup.string(),
				dayDescription: Yup.string(),
				hideNote: Yup.boolean(),
				workouts: Yup.array().of(
					Yup.object().shape({
						workoutName: Yup.string()
							.min(2, "too short")
							.required("Required")
							.max(25, "Too long!"),
						workoutNote: Yup.string()
							.min(3, "Too short! How is that a note?")
							.max(100, "Too long!"),
						lifts: Yup.array().of(
							Yup.object().shape({
								liftName: Yup.string()
									.min(2, "too short")
									.required("Required")
									.max(25, "Too long!"),
								load: Yup.number()
									.positive("Provide a positive load!")
									.max(9000, "It can't be over 9000!!"),
								sets: Yup.number()
									.required()
									.positive("Use a positive number")
									.max(999, "Thats too much.."),
								reps: Yup.number()
									.required()
									.positive("Use a positive number")
									.max(999, "Thats too much.."),
								rest: Yup.string().max(50, "Too long!"),
								note: Yup.string()
									.min(3, "Too short! How is that a note?")
									.max(100, "Too long!"),
								unit: Yup.string().max(15),
								hideNote: Yup.boolean(),
							})
						),
					})
				),
			})
		),
	});
	interface Lifts {
		name: string;
		load: string;
		sets: string;
		reps: string;
		rest: string;
		note: string;
		hideNote: boolean;
		unit: string;
	}
	interface Workouts {
		workoutName: string;
		workoutNote: string;
		rest: string;
		lifts: Lifts[];
	}
	interface Days {
		dayName: string;
		dayDescription: string;
		hideNote: boolean;
		workouts: Workouts[];
	}
	interface MyFormValues {
		title: string;
		description: string;
		preset: string | null;
		days: Days[];
	}

	const basictemplate: MyFormValues = {
		title: "3 a day basic",
		description: "Upper/ Lower / Full Body!",
		preset: null,
		days: [
			{
				dayName: "Upper",
				dayDescription:
					"Push pull upper with main movements of pull ups and bench press",
				hideNote: true,
				workouts: [
					{
						workoutName: "Super Set Bench",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Bench Press",
								load: "9",
								sets: "5",
								reps: "5",
								rest: "",
								note: "",
								hideNote: true,
								unit: "rpe",
							},
							{
								name: "Incline Press",
								load: "9",
								sets: "5",
								reps: "5",
								rest: "",
								note: "",
								hideNote: true,
								unit: "rpe",
							},
						],
					},
					{
						workoutName: "Pull up",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Pull up",
								load: "6",
								sets: "5",
								reps: "8",
								rest: "",
								note: "",
								hideNote: true,
								unit: "rpe",
							},
						],
					},
					{
						workoutName: "third movement",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Push ups",
								load: "",
								sets: "2",
								reps: "5",
								rest: "",
								note: "",
								hideNote: true,
								unit: "bodyweight",
							},
						],
					},
				],
			},
			{
				dayName: "Lower",
				dayDescription:
					"Push pull upper with main movements of pull ups and bench press",
				hideNote: true,
				workouts: [
					{
						workoutName: "",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Bench Press",
								load: "9",
								sets: "5",
								reps: "5",
								rest: "",
								note: "",
								hideNote: true,
								unit: "rpe",
							},
							{
								name: "Decline Bench",
								load: "9",
								sets: "5",
								reps: "5",
								rest: "",
								note: "",
								hideNote: true,
								unit: "rpe",
							},
						],
					},
					{
						workoutName: "",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Pull up",
								load: "6",
								sets: "5",
								reps: "8",
								rest: "",
								note: "",
								hideNote: true,
								unit: "rpe",
							},
						],
					},
					{
						workoutName: "",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Push ups",
								load: "",
								sets: "2",
								reps: "5",
								rest: "",
								note: "",
								hideNote: true,
								unit: "bodyweight",
							},
						],
					},
				],
			},
			{
				dayName: "Fullbody",
				dayDescription:
					"Push pull upper with main movements of pull ups and bench press",
				hideNote: true,
				workouts: [
					{
						workoutName: "",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Bench Press",
								load: "9",
								sets: "5",
								reps: "5",
								rest: "",
								note: "",
								hideNote: true,
								unit: "rpe",
							},
						],
					},
					{
						workoutName: "",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Pull up",
								load: "6",
								sets: "5",
								reps: "8",
								rest: "",
								note: "",
								hideNote: true,
								unit: "rpe",
							},
						],
					},
					{
						workoutName: "",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "Push ups",
								load: "",
								sets: "2",
								reps: "5",
								rest: "",
								note: "",
								hideNote: true,
								unit: "bodyweight",
							},
						],
					},
				],
			},
		],
	};
	const initialValues: MyFormValues = {
		title: "My Split",
		description: "",
		preset: null,
		days: [
			{
				dayName: "",
				dayDescription: "",
				hideNote: true,
				workouts: [
					{
						workoutName: "",
						workoutNote: "",
						rest: "",
						lifts: [
							{
								name: "",
								load: "",
								sets: "",
								reps: "",
								rest: "",
								note: "",
								hideNote: true,
								unit: "",
							},
						],
					},
				],
			},
		],
	};
	function Lifts({
		liftsArrayHelpers,
		workoutIndex,
		dayIndex,
	}: FunctionComponent<void | FieldArrayRenderProps>) {
		const { values } = liftsArrayHelpers.form;

		return (
			<Box>
				{values.days[dayIndex].workouts[workoutIndex].lifts &&
				values.days[dayIndex].workouts[workoutIndex].lifts.length > 0
					? values.days[dayIndex].workouts[workoutIndex].lifts.map(
							(lift: Lifts, index: any) => (
								<Box key={index}>
									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].name`}
										component={CFormikInput}
									/>
								</Box>
							)
					  )
					: null}
			</Box>
		);
	}
	function Days({
		daysArrayHelpers,
	}: FunctionComponent<void | FieldArrayRenderProps>) {
		const { values } = daysArrayHelpers.form;

		return (
			<>
				{values.days && values.days.length > 0 ? (
					values.days.map((day, index) => (
						<Box key={index} p="32px" bgColor="gray.600" my="16px">
							<Flex justify="center">
								<Field
									name={`days[${index}].dayName`}
									component={CFormikInput}
								/>

								<Button
									type="button"
									onClick={() =>
										daysArrayHelpers.remove(index)
									}
								>
									-
								</Button>
							</Flex>
							<Box>
								<Field
									name={`days[${index}].dayDescription`}
									component={CFormikInput}
								/>
							</Box>
							<Box>Lifts:</Box>
							<FieldArray
								name={`days[${index}].workouts`}
								render={(arrayHelpers) => (
									<>
										<Workouts
											dayIndex={`${index}`}
											workoutsArrayHelpers={arrayHelpers}
										/>
									</>
								)}
							/>
						</Box>
					))
				) : (
					<button
						type="button"
						onClick={() =>
							daysArrayHelpers.push({
								dayName: "Test",
								dayDescription: "howdy",
								hideNote: true,
								workouts: [],
							})
						}
					>
						Add a Day
					</button>
				)}
			</>
		);
	}
	function Workouts({
		workoutsArrayHelpers,
		dayIndex,
	}: FunctionComponent<void | FieldArrayRenderProps>) {
		const { values } = workoutsArrayHelpers.form;

		return (
			<Box>
				<Flex>
					<Button
						onClick={() => {
							workoutsArrayHelpers.push({
								workoutName: null,
								workoutNote: "",
								rest: "",
								lifts: [
									{
										name: "testing push",
										load: "",
										sets: "",
										reps: "",
										rest: "",
										note: "",
										hideNote: true,
										unit: "lb",
									},
								],
							});
						}}
					>
						Add Lift
					</Button>

					<Button>Add SuperSet</Button>
					<Button>Add Circuit</Button>
				</Flex>
				{values.days[dayIndex].workouts &&
				values.days[dayIndex].workouts.length > 0
					? values.days[dayIndex].workouts.map(
							(workout: Workouts, index: any) => (
								<Box key={index}>
									<Field
										name={`days[${dayIndex}].workouts[${index}].workoutName`}
										component={CFormikInput}
									/>

									<Lifts
										workoutIndex={index}
										dayIndex={dayIndex}
										liftsArrayHelpers={workoutsArrayHelpers}
									/>
								</Box>
							)
					  )
					: null}
			</Box>
		);
	}

	return (
		<Flex justify="center" flexDir="column" align="center" w="100%">
			<Heading as="h3" size="lg" mb={4} opacity="0.7">
				Build A Dplit
			</Heading>
			<GlassBgBox p="18px" op={0.08} w="100%">
				<Formik
					initialValues={initialValues}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}, 1000);
					}}
					validationSchema={ProgramSchema}
					enableReinitialize={false}
				>
					{/* @ts-ignore */}
					{({ values, setFieldValue, isSubmitting, setValues }) => (
						<Form>
							<FieldArray name="days">
								{/* @ts-ignore */}
								{({ remove, push }) => (
									<Box>
										<Flex
											justify="center"
											w="100%"
											my="16px"
										>
											<Box w="10%" mx="8px">
												<Field
													component={CFormikInput}
													name="title"
												/>
											</Box>
											<Button
												onClick={() => {
													setValues(
														basictemplate,
														false
													);
												}}
											>
												Basic Split
											</Button>
											<Box w="10%" mx="8px">
												<Field
													component={
														CFormikSplitSelect
													}
													name="preset"
												/>
											</Box>

											<IconButton
												aria-label="add"
												icon={<AddIcon />}
												type="button"
												onClick={() =>
													push({
														dayName:
															values.days.length +
															1,
														dayDescription: "",
														hideNote: true,
														workouts: [],
													})
												}
											>
												Add Day
											</IconButton>
										</Flex>
										<Flex justify="center" flexWrap="wrap">
											{values.days.length > 0 &&
												values.days.map(
													/* @ts-ignore */
													(day, index) => {
														return (
															<Box
																mx="8px"
																my="8px"
																bgColor="gray.800"
																p="16px"
																w="50%"
															>
																<Flex
																	justify="flex-end"
																	my="8px"
																>
																	<Field
																		name={`days[${index}.dayName]`}
																		component={
																			CFormikInput
																		}
																	/>
																	<IconButton
																		variant="ghost"
																		aria-label="add note"
																		icon={
																			<BiNote />
																		}
																		type="button"
																		onClick={() =>
																			setFieldValue(
																				`days[${index}].hideNote`,
																				!day.hideNote
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
																	/>
																</Flex>
																<Flex
																	justify="center"
																	my="16px"
																>
																	<Button
																		onClick={() => {}}
																	>
																		Lift
																	</Button>
																	<Button>
																		Super
																		Set
																	</Button>
																	<Button>
																		Circuit
																	</Button>
																</Flex>
																<Box>
																	<FieldArray
																		name={`day[${index}].workouts`}
																	>
																		{({
																			/* @ts-ignore */
																			remove,
																			/* @ts-ignore */
																			push,
																		}) => (
																			<Box>
																				{values
																					.days[
																					index
																				]
																					.workouts
																					.length >
																					0 &&
																					values.days[
																						index
																					].workouts.map(
																						(
																							/* @ts-ignore */
																							workout,
																							/* @ts-ignore */
																							windex
																						) => {
																							return (
																								<Box>
																									<Flex
																										justify="flex-end"
																										my="8px"
																									>
																										<Field
																											name={`days[${index}].workouts[${windex}].workoutName`}
																											component={
																												CFormikInput
																											}
																										/>
																										<IconButton
																											variant="ghost"
																											aria-label="add note"
																											icon={
																												<BiNote />
																											}
																											type="button"
																											onClick={() =>
																												setFieldValue(
																													`days[${index}].hideNote`,
																													!day.hideNote
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
																										/>
																									</Flex>
																								</Box>
																							);
																						}
																					)}
																			</Box>
																			// <Field
																			// 	name={`days[${index}].workouts[${}]`}
																			// 	component={
																			// 		CFormikInput
																			// 	}
																			// />
																		)}
																	</FieldArray>
																</Box>

																{day.hideNote ? null : (
																	<Field
																		name={`days[${index}].dayDescription`}
																		component={
																			CFormikInput
																		}
																	/>
																)}
															</Box>
														);
													}
												)}
										</Flex>
									</Box>
								)}
							</FieldArray>
							{/* @ts-ignore */}
							<pre>{JSON.stringify(values, null, 2)}</pre>
							{/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
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
		</Flex>
	);
}

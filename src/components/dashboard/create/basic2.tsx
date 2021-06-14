import {
	Container,
	HStack,
	Text,
	Heading,
	Button,
	IconButton,
	VStack,
	Flex,
	Box,
} from "@chakra-ui/react";
import { Formik, Form, Field, FieldArray } from "formik";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { BiNote } from "react-icons/bi";
// import { createProgram } from "@api/program";
import GlassBgBox from "@components/glassbg";
import * as Yup from "yup";
import CNumberInput from "@components/formiknumberinput";
import CFormikInput from "@components/formikinput";
import CFormikUnitSelect from "@components/unitselectoptions";
import CFormikSplitSelect from "@components/splitselectoptions";
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

	interface MyFormValues {
		title: string;
		description: string;
		preset: string | null;
		days: [
			{
				dayName: string;
				dayDescription: string;
				hideNote: boolean;
				workouts: [
					{
						workoutName: string;
						workoutNote: string;
						rest: string;
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
				];
			}
		];
	}
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

	return (
		<Flex justify="center" flexDir="column" align="center" w="100%">
			<Heading as="h3" size="lg" mb={4} opacity="0.7">
				Build A SPlit
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
					// validateOnChange={false}
					// validateOnBlur={false}
				>
					{({ values, setFieldValue, isSubmitting }) => (
						<Form>
							<FieldArray name="days">
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
													})
												}
											>
												Add Day
											</IconButton>
										</Flex>
										<Flex justify="center">
											{values.days.length > 0 &&
												values.days.map(
													(day, index) => {
														return (
															<Box mx="8px">
																<Flex justify="flex-end">
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

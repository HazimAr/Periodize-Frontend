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
	InputRightElement,
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
	getIn,
} from "formik";
import {
	DeleteIcon,
	AddIcon,
	ArrowDownIcon,
	ArrowUpIcon,
} from "@chakra-ui/icons";
import { BiNote } from "react-icons/bi";
import { createProgram } from "@api/program";
import GlassBgBox from "@components/glassbg";
import * as Yup from "yup";

export default function CreateForm(props: any) {
	const ProgramSchema = Yup.object().shape({
		lifts: Yup.array().of(
			Yup.object().shape({
				name: Yup.string()
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
	});

	const CFormikInput = ({ field, form: { errors, touched } }: FieldProps) => {
		const error = getIn(errors, field.name);
		const touch = getIn(touched, field.name);
		const invalid = touch && error;
		return (
			<FormControl isInvalid={invalid}>
				<Input {...field} />
				{error && <FormErrorMessage>{error}</FormErrorMessage>}
			</FormControl>
		);
	};

	const CNumberInput = (
		{ field, form: { errors, touched, setFieldValue } }: FieldProps,
		val: any
	) => {
		const error = getIn(errors, field.name);
		const touch = getIn(touched, field.name);
		const invalid = touch && error;

		return (
			<FormControl isInvalid={invalid}>
				<Flex align="center">
					<Input
						{...field}
						onChange={(e) => {
							e.preventDefault();
							const { value } = e.target;
							// const regex = /^(|-?\d+)$/;
							// const regex = /^(?!0\d)\d*(\.\d+)?$/gm;
							// if (regex.test(value.toString())) {
							// 	setFieldValue(field.name, value);
							// }
							if (parseInt(value) >= 0 || value === "") {
								setFieldValue(field.name, value);
							}
						}}
					/>

					<InputRightElement
						children={
							<HStack spacing="">
								<IconButton
									aria-label="increase"
									icon={<ArrowUpIcon />}
									variant="ghost"
									onClick={() =>
										setFieldValue(
											field.name,
											parseInt(field.value) + 1
										)
									}
								/>
								<IconButton
									aria-label="decrease"
									icon={<ArrowDownIcon />}
									variant="ghost"
									onClick={() =>
										parseInt(field.value) > 1
											? setFieldValue(
													field.name,
													parseInt(field.value) - 1
											  )
											: console.log(field.value)
									}
								/>
							</HStack>
						}
					/>
				</Flex>

				{error && <FormErrorMessage>{error}</FormErrorMessage>}
			</FormControl>
		);
	};
	const ErrorMessage = ({ name }) => (
		<Field
			name={name}
			render={({ form }) => {
				const error = getIn(form.errors, name);
				const touch = getIn(form.touched, name);
				return touch && error ? error : null;
			}}
		/>
	);
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
					validationSchema={ProgramSchema}
					// validateOnChange={false}
					// validateOnBlur={false}
				>
					{({ values, setFieldValue, isSubmitting, errors }) => (
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
											values.lifts.map((lift, index) => {
												return (
													<VStack
														key={index}
														mb="32px"
														spacing="16px"
														w="100%"
													>
														<Flex
															justify="flex-end"
															align="center"
															w="100%"
														>
															<IconButton
																variant="ghost"
																aria-label="add note"
																icon={
																	<BiNote />
																}
																type="button"
																onClick={() =>
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
														<Field
															name={`lifts.${index}.name`}
															component={
																CFormikInput
															}
														/>

														<HStack
															spacing="10px"
															align="center"
														>
															<Field
																name={`lifts.${index}.sets`}
																component={
																	CNumberInput
																}
															/>

															<Text>x</Text>
															<Field
																name={`lifts.${index}.reps`}
																component={
																	CNumberInput
																}
															/>
														</HStack>
														<HStack
															spacing="10px"
															w="100%"
														>
															<Field
																name={`lifts.${index}.load`}
																component={
																	CNumberInput
																}
															/>
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
																<option value="%">
																	bodyweight
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
																			<ErrorMessage
																				name={`lifts[${index}].note`}
																			/>
																		</InputGroup>
																	</FormControl>
																)}
															</Field>
														)}
													</VStack>
												);
											})}
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
		</Container>
	);
}

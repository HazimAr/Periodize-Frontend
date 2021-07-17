import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	chakra,
	CheckboxGroup,
	Flex,
	HStack,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tag,
	TagCloseButton,
	TagLabel,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import FormikSelect from "@components/formikselect";
import { Lift, UpdateLiftInput, UpdateLiftMutation } from "API";
import { API } from "aws-amplify";
import { Field, FieldArray, Form, Formik } from "formik";
import { updateLift } from "graphql/mutations";
import React, { ReactElement, useState } from "react";
import { FaHeart } from "react-icons/fa";
import * as Yup from "yup";
import FormikRadio from "../formikcheckbox";
import FormikInput from "../formikinput";
const CHeart = chakra(FaHeart);
interface Props {
	lift: Lift;
}
const LiftSchema = Yup.object().shape({
	name: Yup.string().min(2, "too short").max(25, "Too long!"),
	category: Yup.string(),
	favorite: Yup.string(),
	bodypart: Yup.array().min(1, "Add atleast 1 focus").of(Yup.string()),
	tags: Yup.array().max(7, "Can add up to 7 tags").of(Yup.string()),
	unit: Yup.string(),
});

interface LiftFormInput {
	name: string;
	category: string;
	bodypart: string[];
	tags: string[];
	favorite: string;
	unit: string;
}
const body = [
	{ label: "fullbody", e: "🏋🏼‍♀️", id: "1" },
	{ label: "upper", e: "🦖", id: "2" },
	{ label: "lower", e: "🦘", id: "3" },
	{ label: "legs", e: "🦵🏻", id: "4" },
	{ label: "back", e: "🦍", id: "5" },
	{ label: "chest", e: "🐄", id: "6" },
	{ label: "arms", e: "💪🏻", id: "7" },
	{ label: "glutes", e: "🍑", id: "8" },
	{ label: "abs", e: "😳", id: "9" },
	{ label: "forearms", e: "🙏🏾", id: "10" },
	{ label: "cardio", e: "🚴🏼‍♂️", id: "11" },
];
export default function UpdateLiftModal({ lift }: Props): ReactElement {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [newTag, setnewTag] = useState("");
	const initialValues: LiftFormInput = {
		name: lift.name,
		category: lift.category,
		bodypart: lift.bodypart,
		tags: lift.tags,
		favorite: lift.favorite,
		unit: lift.unit,
	};
	return (
		<>
			<IconButton
				aria-label="edit"
				size="sm"
				icon={<EditIcon />}
				onClick={onOpen}
			/>
			<Modal onClose={onClose} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={initialValues}
							onSubmit={async (values, actions) => {
								console.log(values);
								const newLiftInput: UpdateLiftInput = {
									favorite: values.favorite,
									bodypart: values.bodypart,
									tags: values.tags,
									category: values.category,
									name: values.name,
									unit: values.unit,
									id: lift.id,
								};
								const updatedLift = (await API.graphql({
									query: updateLift,
									variables: { input: newLiftInput },
									authMode:
										GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
								})) as { data: UpdateLiftMutation };
								console.log(updatedLift);
								actions.setSubmitting(false);
								onClose();
							}}
							validationSchema={LiftSchema}
							validateOnBlur={false}
							validateOnChange={false}
						>
							{({
								values,
								errors,
								setFieldValue,
								isSubmitting,
							}) => (
								<Form>
									<VStack spacing={4}>
										<Flex>
											<Field
												name="name"
												component={FormikInput}
											/>
											<IconButton
												aria-label="favorite"
												icon={
													<CHeart
														color={
															values.favorite ===
															"true"
																? "red.600"
																: "white"
														}
													/>
												}
												onClick={() => {
													if (
														values.favorite ===
														"true"
													) {
														setFieldValue(
															"favorite",
															"false"
														);
													} else {
														setFieldValue(
															"favorite",
															"true"
														);
													}
												}}
											/>
										</Flex>
										<Flex w="100%" justify="space-around">
											<Box w="45%">
												<Field
													name="category"
													component={FormikSelect}
													choices={[
														"main movement",
														"accessory",
														"warm up",
														"cardio",
														"rehab",
														"sport",
													]}
												/>
											</Box>
											<Box w="40%">
												<Field
													name="unit"
													component={FormikSelect}
													choices={[
														"lbs",
														"kilo",
														"meters",
														"feet",
														"laps",
														"bodyweight",
													]}
												/>
											</Box>
										</Flex>

										<HStack spacing={4} wrap="wrap">
											<CheckboxGroup
												colorScheme="green"
												defaultValue={values.bodypart}
											>
												{body.map((part) => {
													return (
														<Field
															type="checkbox"
															name="bodypart"
															value={part.label}
															component={
																FormikRadio
															}
															part={part}
															key={part.id}
														/>
													);
												})}
											</CheckboxGroup>
										</HStack>

										<FieldArray
											name="tags"
											render={(arrayHelpers) => (
												<Box>
													<Flex>
														<Input
															value={newTag}
															onChange={(e) =>
																setnewTag(
																	e
																		.currentTarget
																		.value
																)
															}
														/>
														<Button
															onClick={() => {
																if (
																	newTag !==
																		"" &&
																	!values.tags.includes(
																		newTag
																	)
																) {
																	arrayHelpers.push(
																		newTag
																	);
																	setnewTag(
																		""
																	);
																}
															}}
														>
															Add Tag
														</Button>
													</Flex>

													<HStack
														spacing={2}
														wrap="wrap"
														py={2}
													>
														{values.tags.map(
															(tag, i) => {
																return (
																	<Tag
																		size="md"
																		key={
																			tag
																		}
																		borderRadius="md"
																		variant="solid"
																		colorScheme="green"
																	>
																		<TagLabel>
																			{
																				tag
																			}
																		</TagLabel>
																		<TagCloseButton
																			onClick={() =>
																				arrayHelpers.remove(
																					i
																				)
																			}
																		/>
																	</Tag>
																);
															}
														)}
													</HStack>
												</Box>
											)}
										/>

										<Box mb={3}>
											<Button
												type="submit"
												disabled={isSubmitting}
											>
												Submit
											</Button>
										</Box>
									</VStack>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

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
} from "@chakra-ui/react";
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
	FieldArray,
	ErrorMessage
} from "formik";
import { FaDumbbell } from "react-icons/fa";
import {
	GiWeightLiftingUp,
	GiRunningNinja,
	GiWeightLiftingDown,
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
	const [activity, setActivity] = useState("");
	const [load, setLoad] = useState("");
	const [set, setSet] = useState("");
	const [rep, setRep] = useState("");
	interface MyFormValues {
		lifts: [
			{
				superset: boolean;
				note: "";
				acitivies: [
					{
						name: string;
						load: string;
						set: string;
						reps: string;
						rest: string;
						note: string;
					}
				];
			}
		];
	}
	const initialValues: MyFormValues = {
		lifts: [
			{
				superset: false,
				note: "",
				acitivies: [
					{
						name: "",
						load: "",
						set: "",
						reps: "",
						rest: "",
						note: "",
					},
				],
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
					{({ values }) => (
						<Form>
							<FieldArray name="friends">
								{({ insert, remove, push }) => (
									<div>
										{values.lifts.length > 0 &&
											values.lifts.map((lift, index) => (
												<div
													className="row"
													key={index}
												>
													<div className="col">
														<label
															htmlFor={`lifts.${index}.name`}
														>
															Name
														</label>
														<Field
															name={`friends.${index}.name`}
															placeholder="Jane Doe"
															type="text"
														/>
														<ErrorMessage
															name={`friends.${index}.name`}
															component="div"
															className="field-error"
														/>
													</div>
													<div className="col">
														<label
															htmlFor={`friends.${index}.email`}
														>
															Email
														</label>
														<Field
															name={`friends.${index}.email`}
															placeholder="jane@acme.com"
															type="email"
														/>
														<ErrorMessage
															name={`friends.${index}.name`}
															component="div"
															className="field-error"
														/>
													</div>
													<div className="col">
														<button
															type="button"
															className="secondary"
															onClick={() =>
																remove(index)
															}
														>
															X
														</button>
													</div>
												</div>
											))}
										<button
											type="button"
											className="secondary"
											onClick={() =>
												push({
													superset: false,
													note: "",
													acitivies: [
														{
															name: "",
															load: "",
															set: "",
															reps: "",
															rest: "",
															note: "",
														},
													],
												})
											}
										>
											Add activity
										</button>
									</div>
								)}
							</FieldArray>
							<button type="submit">Invite</button>
						</Form>
					)}
				</Formik>
			</GlassBgBox>
		</Container>
	);
}

import {
	// Container,
	// HStack,
	// Text,
	Heading,
	Button,
	// VStack,
	Flex,
	Container,
} from "@chakra-ui/react";
import { Formik, Form, FieldArray } from "formik";
import { createProgram } from "@api/program";
// import { createProgram } from "@api/program";

import GlassBgBox from "@components/glassbg";
import * as Yup from "yup";
import { useRouter } from "next/router";
// import CNumberInput from "@components/formiknumberinput";

// import CFormikUnitSelect from "@components/unitselectoptions";

import DaySection from "@components/dashboard/create/formsections/daysection";
import { MyFormValues, Days, Workouts, Lifts } from "types";
export default function CreateForm() {
	const router = useRouter();
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
							.max(25, "Too long!"),
						workoutNote: Yup.string()
							.min(3, "Too short! How is that a note?")
							.max(100, "Too long!"),
						type: Yup.string(),
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
									.required("Sets required!😡")
									.positive("Use a positive number")
									.max(999, "Thats too much.."),
								reps: Yup.number()
									.required("Reps required!😡")
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
	// interface Lifts {
	// 	name: string;
	// 	load: string;
	// 	sets: string;
	// 	reps: string;
	// 	rest: string;
	// 	note: string;
	// 	hideNote: boolean;
	// 	unit: string;
	// }
	// interface Workouts {
	// 	workoutName: string;
	// 	workoutNote: string;
	// 	hideNote: boolean;
	// 	type: string;
	// 	rest: string;
	// 	lifts: Lifts[];
	// }
	// interface Days {
	// 	dayName: string;
	// 	dayDescription: string;
	// 	hideNote: boolean;
	// 	workouts: Workouts[];
	// }
	// interface MyFormValues {
	// 	title: string;
	// 	description: string;
	// 	// preset: string | null;
	// 	days: Days[];
	// }

	const initialValues: MyFormValues = {
		title: "My Split",
		description: "",
		// preset: "",
		days: [
			{
				dayName: "Day 1",
				dayDescription: "",
				hideNote: true,
				workouts: [
					{
						workoutName: "he",
						workoutNote: "",
						hideNote: true,
						type: "single",
						rest: "",
						lifts: [
							{
								name: "hehe",
								load: "5",
								sets: "5",
								reps: "5",
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
				Build A Workout Program
			</Heading>
			<GlassBgBox p="18px" op={0.08} w="100%">
				<Container maxW="container.lg">
					<Formik
						initialValues={initialValues}
						onSubmit={(values, actions) => {
							createProgram(values).then(() => router.push("/"));
							// console.log("submitting");
							// alert(JSON.stringify(values, null, 2));
							// actions.setSubmitting(false);
						}}
						validationSchema={ProgramSchema}
						enableReinitialize={false}
						validateOnChange={false}
						validateOnBlur={false}
					>
						{(props) => (
							<Form>
								<FieldArray
									name="days"
									render={(arrayHelpers) => (
										<>
											<DaySection
												daysArrayHelpers={arrayHelpers}
												formHelpers={props}
											/>
										</>
									)}
								/>

								{/* <pre>
									{JSON.stringify(props.values, null, 2)}
								</pre> */}
								{/* <pre>
									{JSON.stringify(props.errors, null, 2)}
								</pre> */}
								<Button type="submit">Submit</Button>
								{/* <Button
									type="submit"
									variant="outline"
									my="16px"
									// isLoading={props.isSubmitting}
								>
									Submit
								</Button> */}
							</Form>
						)}
					</Formik>
				</Container>
			</GlassBgBox>
		</Flex>
	);
}

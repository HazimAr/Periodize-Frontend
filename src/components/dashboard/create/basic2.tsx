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
import {
	Formik,
	Form,
	FieldArray,
	
} from "formik";

// import { createProgram } from "@api/program";

import GlassBgBox from "@components/glassbg";
import * as Yup from "yup";
// import CNumberInput from "@components/formiknumberinput";

// import CFormikUnitSelect from "@components/unitselectoptions";

import DaySection from "@components/dashboard/create/formsections/daysection";
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
		hideNote: boolean;
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
						hideNote: true,
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
						hideNote: true,
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
						hideNote: true,
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
						hideNote: true,
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
						hideNote: true,
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
						hideNote: true,
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
						hideNote: true,
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
						hideNote: true,
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
						hideNote: true,
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
				workouts: [],
			},
		],
	};

	return (
		<Flex justify="center" flexDir="column" align="center" w="100%">
			<Heading as="h3" size="lg" mb={4} opacity="0.7">
				Build A Workout Program
			</Heading>
			<GlassBgBox p="18px" op={0.08} w="100%" >
				<Container maxW="container.lg">
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

								<pre>
									{JSON.stringify(props.values, null, 2)}
								</pre>
								{/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
								<Button
									type="submit"
									variant="outline"
									my="16px"
									isLoading={props.isSubmitting}
								>
									Submit
								</Button>
							</Form>
						)}
					</Formik>
				</Container>
			</GlassBgBox>
		</Flex>
	);
}

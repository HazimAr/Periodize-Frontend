import CFormikInput from "@components/formikinput";
import { FieldArrayRenderProps, Field } from "formik";
// import React, { FunctionComponent } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import Lifts from "@components/dashboard/create/formsections/liftsection";

export default function Workouts({
	workoutsArrayHelpers,
	dayIndex,
}: FunctionComponent<void | FieldArrayRenderProps>) {
	const { values } = workoutsArrayHelpers.form;
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
	return (
		<Box>
			<Flex>
				<Button
					onClick={() => {
						workoutsArrayHelpers.push({
							workoutName: "",
							workoutNote: "",
							rest: "",
							lifts: [
								{
									name: `Lift ${values.days[dayIndex].workouts.length}`,
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

				<Button
					onClick={() => {
						workoutsArrayHelpers.push({
							workoutName: "Super Set",
							workoutNote: "",
							hideNote: true,
							rest: "",
							lifts: [
								{
									name: "Lift 1",
									load: "",
									sets: "",
									reps: "",
									rest: "",
									note: "",
									hideNote: true,
									unit: "lb",
								},
								{
									name: "Lift 2",
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
					Add SuperSet
				</Button>
				<Button>Add Circuit</Button>
			</Flex>
			{values.days[dayIndex].workouts &&
			values.days[dayIndex].workouts.length > 0
				? values.days[dayIndex].workouts.map(
						(workout: Workouts, index: any) => (
							<Box key={index}>
								{workout.workoutName == "" ? null : (
									<Field
										name={`days[${dayIndex}].workouts[${index}].workoutName`}
										component={CFormikInput}
									/>
								)}

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

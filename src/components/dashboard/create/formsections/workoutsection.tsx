import { FieldArray } from "formik";
// import React, { FunctionComponent } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import Lifts from "@components/dashboard/create/formsections/liftsection";
export default function Workouts({ workoutsArrayHelpers, dayIndex }: any) {
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
		type: string;
		lifts: Lifts[];
	}
	return (
		<Box>
			<HStack mx="12px" justify="center">
				<Button
					onClick={() => {
						workoutsArrayHelpers.push({
							workoutName: "",
							workoutNote: "",
							rest: "",
							type: "single",
							lifts: [
								{
									name: `New Lift`,
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
							type: "superset",
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
				<Button
					onClick={() => {
						workoutsArrayHelpers.push({
							workoutName: "Circuit",
							workoutNote: "",
							hideNote: true,
							rest: "",
							type: "circuit",
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
								{
									name: "Lift 3",
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
					Add Circuit
				</Button>
			</HStack>
			{values.days[dayIndex].workouts &&
			values.days[dayIndex].workouts.length > 0
				? values.days[dayIndex].workouts.map(
						(workout: Workouts, index: any) => (
							<Box
								key={index}
								border="1px solid white"
								borderRadius="5px"
								p="8px"
								my="16px"
							>
								{console.log(workout)}

								<FieldArray
									name={`days[${dayIndex}].workouts[${index}].lifts`}
									render={(arrayHelpers) => (
										<>
											<Lifts
												workoutIndex={index}
												dayIndex={dayIndex}
												liftsArrayHelpers={arrayHelpers}
												workoutsArrayHelpers={
													workoutsArrayHelpers
												}
											/>
										</>
									)}
								/>
							</Box>
						)
				  )
				: null}
		</Box>
	);
}

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
						(workout: any, index: any) => (
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

import CFormikInput from "@components/formikinput";
import { FieldArrayRenderProps, Field } from "formik";
// import React, { FunctionComponent } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

export default function Lifts({
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
						(lift: any, index: any) => (
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

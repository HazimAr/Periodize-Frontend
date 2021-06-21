import CFormikInput from "@components/formikinput";
import { FieldArrayRenderProps, Field } from "formik";
// import React, { FunctionComponent } from "react";
import { Box, Flex, Button, IconButton } from "@chakra-ui/react";
import { BiNote } from "react-icons/bi";
import { DeleteIcon, AddIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
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
								<Flex>
									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].name`}
										component={CFormikInput}
									/>
									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].sets`}
										component={CFormikInput}
									/>
									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].reps`}
										component={CFormikInput}
									/>
									{/* <IconButton
										variant="ghost"
										aria-label="add note"
										icon={<BiNote />}
										type="button"
										onClick={() =>
											formHelpers.setFieldValue(
												`days[${index}].hideNote`,
												!day.hideNote
											)
										}
									/> */}
									<IconButton
										aria-label="download day template"
										// onClick={() => liftsArrayHelpers.remove(index)}
										icon={<DownloadIcon />}
										variant="ghost"
									/>
									<IconButton
										aria-label="delete"
										onClick={() =>
											liftsArrayHelpers.remove(index)
										}
										icon={<CloseIcon />}
										variant="ghost"
									/>
								</Flex>
							</Box>
						)
				  )
				: null}
		</Box>
	);
}

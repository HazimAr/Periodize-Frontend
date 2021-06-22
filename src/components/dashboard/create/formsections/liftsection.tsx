import CFormikInput from "@components/formikinput";
import { Field } from "formik";
// import React, { FunctionComponent } from "react";
import {
	Box,
	Flex,
	IconButton,
	FormLabel,
} from "@chakra-ui/react";
import {  AddIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import UnitSelect from "@components/unitselectoptions";
export default function Lifts({
	workoutsArrayHelpers,
	liftsArrayHelpers,
	workoutIndex,
	dayIndex,
}: any) {
	const { values } = liftsArrayHelpers.form;

	return (
		<Box>
			{values.days[dayIndex].workouts[workoutIndex].type ===
			"single" ? null : (
				<Flex my="8px">
					<Field
						name={`days[${dayIndex}].workouts[${workoutIndex}].workoutName`}
						component={CFormikInput}
					/>
					<IconButton
						aria-label="add lift"
						variant="ghost"
						icon={<AddIcon />}
						onClick={() => {
							liftsArrayHelpers.push({
								name: `New Lift`,
								load: "",
								sets: "",
								reps: "",
								rest: "",
								note: "",
								hideNote: true,
								unit: "lb",
							});
						}}
					/>

					<IconButton
						aria-label="download workout template"
						// onClick={() => liftsArrayHelpers.remove(index)}
						icon={<DownloadIcon />}
						variant="ghost"
					/>
					<IconButton
						aria-label="delete"
						onClick={() =>
							workoutsArrayHelpers.remove(workoutIndex)
						}
						icon={<CloseIcon />}
						variant="ghost"
					/>
				</Flex>
			)}

			{values.days[dayIndex].workouts[workoutIndex].lifts &&
			values.days[dayIndex].workouts[workoutIndex].lifts.length > 0
				? values.days[dayIndex].workouts[workoutIndex].lifts.map(
						(lift: any, index: any) => (
							<Box key={index} my="4px">
								<Flex>
									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].name`}
										component={CFormikInput}
									/>
									{console.log(lift)}
									<FormLabel ml="50px">Sets</FormLabel>

									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].sets`}
										component={CFormikInput}
									/>

									<FormLabel ml="15px">Reps</FormLabel>

									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].reps`}
										component={CFormikInput}
									/>

									<FormLabel ml="50px">Load</FormLabel>
									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].load`}
										component={CFormikInput}
									/>

									<Field
										name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].unit`}
										component={UnitSelect}
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

									{values.days[dayIndex].workouts[
										workoutIndex
									].type === "single" ? (
										<IconButton
											aria-label="delete"
											onClick={() =>
												workoutsArrayHelpers.remove(
													workoutIndex
												)
											}
											icon={<CloseIcon />}
											variant="ghost"
										/>
									) : (
										<IconButton
											aria-label="delete"
											onClick={() =>
												liftsArrayHelpers.remove(index)
											}
											icon={<CloseIcon />}
											variant="ghost"
										/>
									)}
								</Flex>
							</Box>
						)
				  )
				: null}
		</Box>
	);
}

import CFormikInput from "@components/formikinput";
import { FieldArrayRenderProps, Field } from "formik";
// import React, { FunctionComponent } from "react";
import { Box, Flex, Button, HStack, IconButton } from "@chakra-ui/react";
import Lifts from "@components/dashboard/create/formsections/liftsection";
import { BiNote } from "react-icons/bi";
import { DeleteIcon, AddIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
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
			<HStack mx="12px" justify="center">
				<Button
					onClick={() => {
						workoutsArrayHelpers.push({
							workoutName: "",
							workoutNote: "",
							rest: "",
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
			</HStack>
			{values.days[dayIndex].workouts &&
			values.days[dayIndex].workouts.length > 0
				? values.days[dayIndex].workouts.map(
						(workout: Workouts, index: any) => (
							<Box
								key={index}
								border="2px solid white"
								borderRadius="5px"
								p="8px"
								my="16px"
							>
								{workout.workoutName == "" ? null : (
									<Flex my="8px">
										<Field
											name={`days[${dayIndex}].workouts[${index}].workoutName`}
											component={CFormikInput}
										/>
										<IconButton
											aria-label="download day template"
											// onClick={() => liftsArrayHelpers.remove(index)}
											icon={<DownloadIcon />}
											variant="ghost"
										/>
										<IconButton
											aria-label="delete"
											onClick={() =>
												workoutsArrayHelpers.remove(
													index
												)
											}
											icon={<CloseIcon />}
											variant="ghost"
										/>
									</Flex>
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

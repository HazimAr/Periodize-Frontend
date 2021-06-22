import { Field, FieldArray } from "formik";
// import React, { FunctionComponent } from "react";
import { Box, Flex, Button, IconButton, FormLabel, Spacer } from "@chakra-ui/react";
import Workouts from "@components/dashboard/create/formsections/workoutsection";
import { AddIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import CFormikSplitSelect from "@components/splitselectoptions";
import CFormikInput from "@components/formikinput";
import { basictemplate } from "@components/dashboard/create/formsections/_data";
import { BiNote } from "react-icons/bi";
export default function Days({
	daysArrayHelpers,
	formHelpers,
}: any) {
	// props
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
		type: string;
		rest: string;
		lifts: Lifts[];
	}
	interface Days {
		dayName: string;
		dayDescription: string;
		hideNote: boolean;
		workouts: Workouts[];
	}
	const { values } = daysArrayHelpers.form;
	console.log(formHelpers.values.days);

	console.log("form helpers", formHelpers.values);
	return (
		<>
			<Box w="100%" mx="8px">
					<Field component={CFormikInput} name="title" />
			</Box>
			<Flex justify="center" w="100%" my="16px">
				<Button
					onClick={() => {
						formHelpers.setValues(basictemplate, false);
					}}
				>
					Basic Split
				</Button>
				<Box w="10%" mx="8px">
					<Field component={CFormikSplitSelect} name="preset" />
				</Box>

				<IconButton
					ml="8px"
					aria-label="add"
					icon={<AddIcon />}
					type="button"
					onClick={() =>
						daysArrayHelpers.push({
							dayName: `Day ${values.days.length + 1}`,
							dayDescription: "",
							hideNote: true,
							workouts: [],
						})
					}
				>
					Add Day
				</IconButton>
				<Spacer/>
				<Button 
					onClick={() => {
						formHelpers.handleReset();
					}}
				>
					Reset Form
				</Button>
			</Flex>
			{values.days && values.days.length > 0 ? (
				values.days.map((day:Days, index:number) => (
					<Box
						key={index}
						paddingBottom="32px"
						px="32px"
						border="2px"
						borderRadius="10px"
						my="16px"
					>
						<Flex justify="space-between" mt="20px">
							<Flex w="20%">
							<Field
								name={`days[${index}].dayName`}
								component={CFormikInput}
							/>
							</Flex>
							<Flex>
								<IconButton
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
								/>

								<IconButton
									aria-label="download day template"
									// onClick={() => daysArrayHelpers.remove(index)}
									icon={<DownloadIcon />}
									variant="ghost"
								/>
								<IconButton
									aria-label="delete"
									onClick={() =>
										daysArrayHelpers.remove(index)
									}
									icon={<CloseIcon />}
									variant="ghost"
								/>
							</Flex>
						</Flex>
						<Box>
							{day.hideNote ? null : (
								<Box mt="10px">
									<FormLabel fontSize="15px">
										Description:
									</FormLabel>
									<Field
										name={`days[${index}].dayDescription`}
										component={CFormikInput}
									/>
								</Box>
							)}
						</Box>
						<Box my="8px">
							<FieldArray
								name={`days[${index}].workouts`}
								render={(arrayHelpers) => (
									<>
										<Workouts
											dayIndex={`${index}`}
											workoutsArrayHelpers={arrayHelpers}
										/>
									</>
								)}
							/>
						</Box>
					</Box>
				))
			) : (
				<button
					type="button"
					onClick={() =>
						daysArrayHelpers.push({
							dayName: "Test",
							dayDescription: "howdy",
							hideNote: true,
							workouts: [],
						})
					}
				>
					Add a Day
				</button>
			)}
		</>
	);
}

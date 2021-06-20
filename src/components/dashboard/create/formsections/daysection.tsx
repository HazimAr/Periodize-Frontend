import { FieldArrayRenderProps, Field, FieldArray } from "formik";
// import React, { FunctionComponent } from "react";
import { Box, Flex, Button, IconButton } from "@chakra-ui/react";
import Workouts from "@components/dashboard/create/formsections/workoutsection";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import CFormikSplitSelect from "@components/splitselectoptions";
import CFormikInput from "@components/formikinput";
import { basictemplate } from "@components/dashboard/create/formsections/_data";
export default function Days({
	daysArrayHelpers,
	formHelpers,
}: FunctionComponent<void | FieldArrayRenderProps>) {
	// props
	const { values } = daysArrayHelpers.form;
	console.log(formHelpers.values.days);

	console.log("form helpers", formHelpers.values);
	return (
		<>
			<Flex justify="center" w="100%" my="16px">
				<Box w="10%" mx="8px">
					<Field component={CFormikInput} name="title" />
				</Box>
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
					aria-label="add"
					icon={<AddIcon />}
					type="button"
					onClick={() =>
						daysArrayHelpers.push({
							dayName: values.days.length + 1,
							dayDescription: "",
							hideNote: true,
							workouts: [],
						})
					}
				>
					Add Day
				</IconButton>
				<Button
					onClick={() => {
						formHelpers.handleReset();
					}}
				>
					Reset Form
				</Button>
			</Flex>
			{values.days && values.days.length > 0 ? (
				values.days.map((day, index) => (
					<Box key={index} p="32px" bgColor="gray.600" my="16px">
						<Flex justify="center">
							<Field
								name={`days[${index}].dayName`}
								component={CFormikInput}
							/>

							<Button
								type="button"
								onClick={() => daysArrayHelpers.remove(index)}
							>
								-
							</Button>
						</Flex>
						<Box>
							<Field
								name={`days[${index}].dayDescription`}
								component={CFormikInput}
							/>
						</Box>
						<Box>Lifts:</Box>
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

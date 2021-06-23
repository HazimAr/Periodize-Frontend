import CFormikInput from "@components/formikinput";
import { Field } from "formik";
// import React, { FunctionComponent } from "react";
import {
	Box,
	Flex,
	IconButton,
	FormLabel,
	Text,
	Grid,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	GridItem,
	HStack,
	InputLeftElement,
	InputGroup,
	Input,
	Icon,
	SimpleGrid,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import { GiAlarmClock } from "react-icons/gi";
import UnitSelect from "@components/unitselectoptions";
export default function Lifts({
	workoutsArrayHelpers,
	liftsArrayHelpers,
	workoutIndex,
	dayIndex,
}: any) {
	const { values } = liftsArrayHelpers.form;

	return (
		<Box
			border={
				values.days[dayIndex].workouts[workoutIndex].type === "single"
					? "1px solid white"
					: "1px solid pink"
			}
			my="8px"
			px="12px"
			py="2px"
			borderRadius="5px"
		>
			{values.days[dayIndex].workouts[workoutIndex].type ===
			"single" ? null : (
				<Flex justify="space-between" my="6px" pb="6px">
					<Box w="50%">
						<Field
							name={`days[${dayIndex}.workouts[${workoutIndex}].workoutName`}
							component={CFormikInput}
						/>
					</Box>

					<Flex>
						{values.days[dayIndex].workouts[workoutIndex].type ===
						"circuit" ? (
							<Flex w="100px" align="center">
								<Icon
									as={GiAlarmClock}
									color="gray.300"
									w={6}
									h={6}
								/>

								<Field
									name={`days[${dayIndex}.workouts[${workoutIndex}].rest`}
									component={CFormikInput}
								/>
							</Flex>
						) : null}
						<IconButton
							aria-label="add"
							onClick={() =>
								liftsArrayHelpers.push({
									name: "New Lift",
									load: "",
									sets: "",
									reps: "",
									rest: "",
									note: "",
									hideNote: true,
									unit: "",
								})
							}
							icon={<AddIcon />}
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
				</Flex>
			)}

			{values.days[dayIndex].workouts[workoutIndex].lifts &&
			values.days[dayIndex].workouts[workoutIndex].lifts.length > 0
				? values.days[dayIndex].workouts[workoutIndex].lifts.map(
						(lift: any, index: any) => (
							// <Grid
							// 	templateColumns="repeat(6, 1fr)"
							// 	gap={4}
							// 	// rowGap={8}
							// 	my="6px"
							// 	px="8px"
							// >
							// 	<GridItem>
							// 		<Field
							// 			name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].name`}
							// 			component={CFormikInput}
							// 		/>
							// 	</GridItem>
							// 	<GridItem>
							// 		<Field
							// 			name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].sets`}
							// 			component={CFormikInput}
							// 		/>
							// 	</GridItem>
							// 	<GridItem>
							// 		<Field
							// 			name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].reps`}
							// 			component={CFormikInput}
							// 		/>
							// 	</GridItem>
							// 	<GridItem>
							// 		<Field
							// 			name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].load`}
							// 			component={CFormikInput}
							// 		/>
							// 	</GridItem>
							// 	<GridItem>
							// 		<Field
							// 			name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].unit`}
							// 			component={UnitSelect}
							// 		/>
							// 	</GridItem>
							// 	<GridItem rowEnd="auto">
							// 		<Flex justify="flex-end">
							// 			{/* <IconButton
							// 				aria-label="download day template"
							// 				// onClick={() => liftsArrayHelpers.remove(index)}
							// 				icon={<DownloadIcon />}
							// 				variant="ghost"
							// 			/> */}

							// 			{values.days[dayIndex].workouts[
							// 				workoutIndex
							// 			].type === "single" ? (
							// 				<IconButton
							// 					aria-label="delete"
							// 					onClick={() =>
							// 						workoutsArrayHelpers.remove(
							// 							workoutIndex
							// 						)
							// 					}
							// 					icon={<CloseIcon />}
							// 					variant="ghost"
							// 					size="sm"
							// 				/>
							// 			) : (
							// 				<IconButton
							// 					aria-label="delete"
							// 					onClick={() =>
							// 						liftsArrayHelpers.remove(
							// 							index
							// 						)
							// 					}
							// 					icon={<CloseIcon />}
							// 					variant="ghost"
							// 					size="sm"
							// 				/>
							// 			)}
							// 		</Flex>
							// 	</GridItem>
							// </Grid>

							<SimpleGrid columns={6} spacing={4} my="6px">
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

								<Field
									name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].load`}
									component={CFormikInput}
								/>

								<Field
									name={`days[${dayIndex}.workouts[${workoutIndex}].lifts[${index}].unit`}
									component={UnitSelect}
								/>

								<Flex justify="flex-end">
									{/* <IconButton
											aria-label="download day template"
											// onClick={() => liftsArrayHelpers.remove(index)}
											icon={<DownloadIcon />}
											variant="ghost"
										/> */}

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
											size="sm"
										/>
									) : (
										<IconButton
											aria-label="delete"
											onClick={() =>
												liftsArrayHelpers.remove(index)
											}
											icon={<CloseIcon />}
											variant="ghost"
											size="sm"
										/>
									)}
								</Flex>
							</SimpleGrid>
						)
				  )
				: null}
		</Box>
	);
}

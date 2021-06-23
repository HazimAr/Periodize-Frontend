import { FieldArray } from "formik";
// import React, { FunctionComponent } from "react";
import {
	Box,
	Button,
	HStack,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	Grid,
	GridItem,
	Text,
	SimpleGrid,
} from "@chakra-ui/react";
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
			<HStack mx="12px" justify="center" my="16px">
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
			{values.days[dayIndex].workouts.length < 1 ? null : (
				<Box m="8px" px="12px" py="8px">
					<SimpleGrid columns={6}>
						<Box>Movement</Box>
						<Box>Sets</Box>
						<Box>Reps</Box>
						<Box>Load</Box>
						<Box>Unit</Box>
						<Box></Box>
					</SimpleGrid>
				</Box>
			)}

			{/* <Grid
				// templateRows="repeat(2, 1fr)"
				templateColumns="repeat(6, 1fr)"
				gap={6}
			>
				<GridItem>Movement</GridItem>
				<GridItem>Sets</GridItem>
				<GridItem>Reps</GridItem>
				<GridItem>Load</GridItem>
				<GridItem>Unit</GridItem>
				<GridItem></GridItem>
			</Grid> */}
			{values.days[dayIndex].workouts &&
			values.days[dayIndex].workouts.length > 0
				? values.days[dayIndex].workouts.map(
						(workout: Workouts, index: any) => (
							// {console.log(workout)}

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
						)
				  )
				: null}
		</Box>
	);
}

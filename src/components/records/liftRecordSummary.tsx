import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import DeleteLiftModal from "@components/lifts/deleteLiftModal";
import { Lift, Record } from "API";
import React, { ReactElement } from "react";
import CreateRecordModal from "./createRecordModal";
interface Props {
	lift: Lift;
	fetchMyLifts: any;
}

function findPR(records: Record[]) {
	//find record with highest load if tie priority: reps, sets
	// let prIndex;
	let greatest: Record;
	for (let i = 0; i < records.length; i++) {
		if (!greatest) {
			greatest = records[i];
		} else if (
			records[i].load > greatest.load ||
			(records[i].load === greatest.load &&
				records[i].reps > greatest.reps)
		) {
			greatest = records[i];
		}
	}

	return greatest;
}
export default function LiftRecordSummary({
	lift,
	fetchMyLifts,
}: Props): ReactElement {
	// console.log(records);
	const pr = findPR(lift.records.items);
	const sortedRecords = lift.records.items
		.sort(function (a, b) {
			const Date1 = Date.parse(b.performedDate);
			const Date2 = Date.parse(a.performedDate);
			return Date1 - Date2;
		})
		.slice(0, 3);
	return (
		<Box textAlign="left" pt={2}>
			<HStack justify="flex-end" spacing={2}>
				<CreateRecordModal lift={lift} fetchMyLifts={fetchMyLifts} />
				<DeleteLiftModal lift={lift} fetchMyLifts={fetchMyLifts} />
			</HStack>

			<Text
				color="gold"
				fontSize="lg"
			>{`PR: ${pr.load}${lift.unit}  ${pr.sets}x${pr.reps}`}</Text>
			<Text mt={2} as="u">
				Recent
			</Text>
			<VStack align="flex-start" spacing={0}>
				{sortedRecords.map((record) => (
					<Text key={record.id}>
						{`${record.load}${lift.unit} ${record.sets}x${record.reps}`}
					</Text>
				))}
			</VStack>
		</Box>
	);
}

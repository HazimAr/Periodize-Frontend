import {
	Box,
	Heading,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { Record } from "API";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parseISO from "date-fns/parseISO";
import React from "react";

interface Props {
	records: Record[];
}

export default function recentRecordVolumes({ records }: Props): JSX.Element {
	const startDate = new Date();
	const currentDate = startDate.toISOString();

	const recordsPastWeek = records.filter((record) => {
		const Date1 = Date.parse(currentDate);
		const Date2 = Date.parse(record.performedDate);
		return Date1 - Date2 < 604800000;
	});

	return (
		<Box borderRadius={25} borderColor="white" borderWidth={1} p={3}>
			<Box>
				<Heading as="h2" size="lg" mb={3}>
					Volumes from the past week
				</Heading>
				<Table size="sm" variant="striped" colorScheme="purple">
					<Thead>
						<Tr>
							<Th>Lift</Th>
							<Th>Date</Th>
							<Th>Volume</Th>
						</Tr>
					</Thead>
					<Tbody>
						{recordsPastWeek.map((record) => (
							<Tr key={record.id}>
								<Td>{record.lift.name}</Td>
								<Td>
									{formatDistanceToNow(
										parseISO(record.performedDate)
									)}{" "}
									ago
								</Td>
								<Td>
									{record.sets * record.reps * record.load}{" "}
									{record.lift.unit}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</Box>
	);
}

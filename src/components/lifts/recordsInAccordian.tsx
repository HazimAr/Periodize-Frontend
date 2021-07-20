import {
	Box,
	Table,
	TableCaption,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parseISO from "date-fns/parseISO";
import Fuse from "fuse.js";
import React, { ReactElement, useState } from "react";
import { Lift } from "../../API";

interface Props {
	lift: Lift;
}

export default function RecordsInAccordian({
	lift
}: Props): ReactElement {

	return (
		<Box>
			<Table variant="simple">
				<TableCaption placement="top">Recent records</TableCaption>
				<Thead>
					<Tr>
						<Th>Amount</Th>
						<Th>Sets</Th>
						<Th>Reps</Th>
						<Th>RPE</Th>
						<Th>Time</Th>
					</Tr>
				</Thead>
				<Tbody>
					{lift.records.items.slice(-3).map((record) => (
						<Tr key={record.id}>
							<Td>
								{record.load} {lift.unit}
							</Td>
							<Td>{record.sets}</Td>
							<Td>{record.reps}</Td>
							<Td>{record.rpe}</Td>
							<Td>
								{formatDistanceToNow(
									parseISO(record.performedDate)
								)}{" "}
								ago
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
}

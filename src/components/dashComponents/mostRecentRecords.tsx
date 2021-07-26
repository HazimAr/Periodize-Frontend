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

interface Props {
	records: Record[];
}

export default function MostRecentRecords({ records }: Props): JSX.Element {
	//sort lifts to last edited
	const sortedRecords = records
		.sort(function (a, b) {
			const Date1 = Date.parse(b.performedDate);
			const Date2 = Date.parse(a.performedDate);
			return Date1 - Date2;
		})
		.slice(0, 5);

	return (
		<Box borderRadius={25} borderColor="white" borderWidth={1} p={3}>
			<Heading as="h2" size="lg" mb={3}>
				Recent Records
			</Heading>
			<Table size="sm" variant="striped" colorScheme="purple">
				<Thead>
					<Tr>
						<Th>Lift</Th>
						<Th>Date</Th>
					</Tr>
				</Thead>
				<Tbody>
					{sortedRecords.map((record) => (
						<Tr key={record.id}>
							<Td>{record.lift.name}</Td>
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

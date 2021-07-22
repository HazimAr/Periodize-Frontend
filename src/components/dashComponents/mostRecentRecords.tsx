import { Record } from "API";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parseISO from "date-fns/parseISO";
import { Box } from "@chakra-ui/react";

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

	console.log("sortedRecords", sortedRecords);

	return (
		<div>
			{sortedRecords.map((record) => (
				<Box key={record.id}>
					Record: {formatDistanceToNow(parseISO(record.performedDate))} ago
					Lift: {record.lift.name}
				</Box>
			))}
		</div>
	);
}

import { Box, Text } from "@chakra-ui/react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parseISO from "date-fns/parseISO";
import Fuse from "fuse.js";
import React, { ReactElement, useState } from "react";
import { Lift } from "../../API";

interface Props {
	lifts: Lift[];
	setLifts: any;
}

export default function RecordsInAccordian({
	lifts,
	setLifts,
}: Props): ReactElement {
	console.log(lifts);

	const [query, setQuery] = useState("");

	const fuse = new Fuse(lifts, {
		keys: ["name", "bodypart", "category", "tags"],
		includeScore: true,
	});
	const results = fuse.search(query);
	const liftResults = query ? results.map((result) => result.item) : lifts;

	return (
		<Box h="100%">
			{liftResults.map((lift) => (
				<Box key={lift.id}>
					{lift.records.items ? (
						//get most recent 3 records
						<Box>
							<Text>Recent records</Text>
							{lift.records.items.slice(-3).map((record) => (
								<Box key={record.id}>
									{`${record.load}${lift.unit} ${
										record.sets
									} x 
									${record.reps} @ 
									${record.rpe} performed: ${formatDistanceToNow(
										parseISO(record.performedDate)
									)} ago`}
								</Box>
							))}
						</Box>
					) : null}
				</Box>
			))}
		</Box>
	);
}

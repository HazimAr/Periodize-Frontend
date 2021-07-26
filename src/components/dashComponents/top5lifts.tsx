import { Box } from "@chakra-ui/react";
import { Lift } from "API";

interface Props {
	lifts: Lift[];
}

export default function Top5Lifts({ lifts }: Props): JSX.Element {
	const sorted = lifts
		.sort((a, b) => {
			return b.records.items.length - a.records.items.length;
		})
		.slice(0, 5);

	//make top 5 list noa : )
	//dont render a lift that has no records, so only return 2 lifts if only 2 lifts have records
	return (
		<Box>
			{sorted.map((lift) => (
				<div key={lift.id}>{lift.name}</div>
			))}
		</Box>
	);
}

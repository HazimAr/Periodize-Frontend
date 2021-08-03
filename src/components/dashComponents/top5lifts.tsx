import { Box, Heading, Link } from "@chakra-ui/react";
import { Lift } from "API";

interface Props {
	lifts: Lift[];
}

export default function Top5Lifts({ lifts }: Props): JSX.Element {
	const sorted = lifts
		.filter((a) => a.records?.items?.length)
		.sort((a, b) => {
			return b.records.items.length - a.records.items.length;
		})
		.slice(0, 5);

	//make top 5 list noa : )
	//dont render a lift that has no records, so only return 2 lifts if only 2 lifts have records
	return (
		<Box borderRadius={25} borderColor="white" borderWidth={1} p={3}>
			<Heading as="h2" size="lg" mb={3}>
				Top 5 Lifts
			</Heading>
			{sorted.map((lift, idx: number) => (
				<Box key={lift.id}>
					<Link href={`/dashboard/lifts/${lift.id}`}>
						{lift.name}
					</Link>
				</Box>
			))}
		</Box>
	);
}

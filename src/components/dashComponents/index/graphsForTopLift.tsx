import { Box, Heading, HStack } from "@chakra-ui/react";
import LoadXTimeChart from "@components/dashComponents/index/loadXTimeChart";
import VolumeXTimeChart from "@components/dashComponents/index/volumeXTimeChart";
import { Lift } from "API";

export default function GraphsForTopLift({
	lifts,
}: {
	lifts: Lift[];
}): JSX.Element {
	const sorted = lifts
		.filter((a) => a.records?.items?.length)
		.sort((a, b) => {
			return b.records.items.length - a.records.items.length;
		})
		.slice(0, 1);

	//make top 5 list noa : )
	//dont render a lift that has no records, so only return 2 lifts if only 2 lifts have records
	return (
		<Box borderRadius={25} borderColor="white" borderWidth={1} p={3}>
			<Heading as="h2" size="lg" mb={3}>
				Graphs For Top Lift
			</Heading>
			<HStack justify="center">
				<LoadXTimeChart lift={sorted[0]} />
				<VolumeXTimeChart lift={sorted[0]} />
			</HStack>
		</Box>
	);
}

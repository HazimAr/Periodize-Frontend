import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Tag,
	TagLabel,
} from "@chakra-ui/react";
import CreateRecordFormModal from "@components/records/createRecordModal";
import { Lift, Record } from "API";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import React, { ReactElement } from "react";
import RecordTable from "../records/recordTable";
import BodyPartTag from "./bodyparttag";
import UpdateLiftModal from "./updateLiftModal";
import LoadXTimeChart from "@components/dashComponents/index/loadXTimeChart";
interface Props {
	lift: Lift;
}
export default function IndividualLift({ lift }: Props): ReactElement {
	// console.log(lift);
	// const [state, setState] = useState({
	// 	data: lift.records.items,
	// 	loading: false,
	// 	sortedBy: null,
	// });

	const formattedRecords = lift.records.items?.map((record) => {
		const formattedDate = format(
			parseISO(record.performedDate),
			"MM/dd/yyyy"
		);
		return { ...record, performedDate: formattedDate };
	});
	function findPR(records: Record[]) {
		// const indexes = []
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
	const pr = findPR(lift.records.items);
	return (
		<Container maxW={["md", "lg"]} mt="20px" justifyContent="center">
			<Flex align="center" justify="center">
				<Heading>{lift.name}</Heading>
				<Flex>
					<CreateRecordFormModal lift={lift} />
					<UpdateLiftModal lift={lift} />
				</Flex>
			</Flex>

			<HStack justify="center" flexWrap="wrap">
				<Box px={3} py={0.5} border="1px solid white" borderRadius="md">
					{lift.discipline}
				</Box>

				<Box px={3} py={0.5} border="1px solid white" borderRadius="md">
					{lift.category}
				</Box>

				{lift.bodypart.map((part) => (
					<BodyPartTag key={part} part={part} />
				))}

				{lift.tags.map((tag) => (
					<Tag
						size="md"
						key={tag}
						variant="subtle"
						colorScheme="cyan"
					>
						{/* <TagLeftIcon boxSize="12px" as={AddIcon} /> */}
						<TagLabel>{tag}</TagLabel>
					</Tag>
				))}
			</HStack>
			{pr ? <Box>PR: {`${pr.sets}x${pr.reps} @ ${pr.load}`}</Box> : null}

			{lift.records.items[0] ? (
				<RecordTable records={formattedRecords} />
			) : (
				<Box>No Records</Box>
			)}

			<LoadXTimeChart lift={lift} />
		</Container>
	);
}

import {
	Box,
	Flex,
	Heading,
	HStack,
	Tag,
	TagLabel,
	VStack,
} from "@chakra-ui/react";
import CreateRecordFormModal from "@components/records/createRecordModal";
import { Lift } from "API";
import React, { ReactElement, useState } from "react";
import RecordTable from "../records/recordTable";
import BodyPartTag from "./bodyparttag";
import UpdateLiftModal from "./updateLiftModal";
interface Props {
	lift: Lift;
}
export default function IndividualLift({ lift }: Props): ReactElement {
	console.log(lift);
	const [state, setState] = useState({
		data: lift.records.items,
		loading: false,
		sortedBy: null,
	});

	return (
		<Box>
			<Flex align="center">
				<Heading>{lift.name}</Heading>
				<CreateRecordFormModal lift={lift} />
				<UpdateLiftModal lift={lift} />
			</Flex>
			<VStack textAlign="left" align="flex-start">
				{lift.category && (
					<Box
						px={3}
						py={0.5}
						border="1px solid white"
						borderRadius="md"
					>
						{lift.category}
					</Box>
				)}
				<HStack>
					{lift.bodypart.map((part) => (
						<BodyPartTag key={part} part={part} />
					))}
				</HStack>
				<HStack spacing={4}>
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
				{lift.records.items[0] ? (
					<RecordTable records={lift.records.items} />
				) : (
					<Box>No Records "(</Box>
				)}
			</VStack>
		</Box>
	);
}

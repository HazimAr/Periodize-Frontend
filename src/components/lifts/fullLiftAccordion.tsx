import { EditIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	IconButton,
	Link,
	Text,
} from "@chakra-ui/react";
import LiftRecordSummary from "@components/records/liftRecordSummary";
import { Lift } from "API";
import React, { ReactElement } from "react";
import CreateRecordModal from "../records/createRecordModal";
import DeleteLiftModal from "./deleteLiftModal";

interface Props {
	lifts: Lift[];
}

export default function FullLiftAccordion({ lifts }: Props): ReactElement {
	return (
		<Accordion allowToggle allowMultiple>
			{lifts.map((lift) => (
				<AccordionItem key={lift.id} py={2} border="none">
					<h2>
						<Flex justify="space-between" align="center">
							<Box textAlign="left">
								<Link href={`/dashboard/lifts/${lift.id}`}>
									<Text fontSize="xl">
										{lift.name.replace(
											/(^\w{1})|(\s+\w{1})/g,
											(letter) => letter.toUpperCase()
										)}
									</Text>
								</Link>
							</Box>

							<Flex>
								<Flex>
									<Link href={`/dashboard/lifts/${lift.id}`}>
										<IconButton
											aria-label="edit lift"
											size="sm"
											icon={<EditIcon />}
											_focus={{
												outline: "none",
											}}
											variant="ghost"
											zIndex={100}
										/>
									</Link>

									<CreateRecordModal
										lift={lift}
										lifts={lifts}
									/>
									<DeleteLiftModal lift={lift} />
								</Flex>

								<AccordionButton
									w="25px"
									p={0}
									m={0}
									_focus={{
										outline: "none",
									}}
								>
									<AccordionIcon />
								</AccordionButton>
							</Flex>
						</Flex>
					</h2>
					<AccordionPanel>
						{lift.records.items[0] ? (
							<LiftRecordSummary lift={lift} />
						) : (
							<Box>No records</Box>
						)}
					</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
}

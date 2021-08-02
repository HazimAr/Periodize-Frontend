import {
	Box,
	Container,
	Flex,
	Heading,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Lift, Record } from "API";
import React, { ReactElement } from "react";
import PRModal from "./prModal";
interface Props {
	lifts: Lift[];
}
const catArr = [
	"main movement",
	"accessory",
	"warm up",
	"cardio",
	"rehab",
	"sport",
];
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
	console.log("PR record: ", greatest);
	return greatest;
}
export default function PersonalRecord({ lifts }: Props): ReactElement {
	//map a new array of lifts that have records based on categories / favorite / body part

	//create an array of lifts that have records
	const prList = lifts.filter(
		(lift) =>
			lift.records.items !== undefined && lift.records.items.length > 0
	);
	console.log(prList);

	return (
		<Container maxW={{ base: "lg" }}>
			<Heading>Personal Records</Heading>

			<PRModal lifts={lifts} />
			<Box>
				<Tabs>
					<TabList>
						<Tab>All</Tab>
						<Tab>Cat</Tab>
						<Tab>Movement</Tab>
						<Tab></Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Box>
								<Stack as="ul" spacing="4">
									{catArr.map((cat) => {
										return prList.filter(
											(l) => l.category === cat
										).length > 0 ? (
											<Box textAlign="left">
												<Heading>{cat}</Heading>
												<VStack>
													{prList
														.filter(
															(l) =>
																l.category ===
																cat
														)
														.map((lift) => {
															const pr = findPR(
																lift.records
																	.items
															);
															return (
																<Box
																	flex="1"
																	textAlign="left"
																	w="100%"
																>
																	<Flex
																		justify="space-between"
																		textAlign="left"
																		w="100%"
																	>
																		<Text>
																			{
																				lift.name
																			}
																		</Text>
																		<Text>
																			{
																				pr.reps
																			}{" "}
																			x{" "}
																			{
																				pr.load
																			}
																		</Text>
																	</Flex>
																</Box>
															);
														})}
												</VStack>
											</Box>
										) : null;
									})}
								</Stack>
							</Box>
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
						<TabPanel>
							<p>three!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
}

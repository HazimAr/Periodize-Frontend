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

const bodyArr = [
	"full body",
	"upper",
	"lower",
	"legs",
	"back",
	"chest",
	"arms",
	"biceps",
	"triceps",
	"abs",
	"glutes",
	"forearms",
	"cardio",
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

	return greatest;
}
export default function PersonalRecord({ lifts }: Props): ReactElement {
	//map a new array of lifts that have records based on categories / favorite / body part

	//create an array of lifts that have records
	const prList = lifts.filter(
		(lift) =>
			lift.records.items !== undefined && lift.records.items.length > 0
	);
	// console.log(prList);
	const favList = prList.filter((lift) => lift.favorite === "true");
	return (
		<Container maxW={{ base: "lg" }}>
			<Flex align="center" justify="center" mb="16px">
				<Heading mr="16px">Personal Records</Heading>

				<PRModal lifts={lifts} />
			</Flex>

			<Box>
				<Tabs>
					<TabList>
						<Tab>Category</Tab>
						<Tab>Bodypart</Tab>
						<Tab>Favorites</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Box>
								<Stack as="ul" spacing="3">
									{catArr.map((cat) => {
										return prList.filter(
											(l) => l.category === cat
										).length > 0 ? (
											<Box textAlign="left">
												<Heading my={3}>{cat}</Heading>
												<VStack spacing={3}>
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
																	key={
																		lift.id
																	}
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
							<Box>
								<Stack as="ul" spacing="3">
									{bodyArr.map((body) => {
										return prList.filter((l) =>
											l.bodypart.includes(body)
										).length > 0 ? (
											<Box textAlign="left">
												<Heading my={3}>{body}</Heading>
												<VStack spacing={3}>
													{prList
														.filter((l) =>
															l.bodypart.includes(
																body
															)
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
																	key={
																		lift.id
																	}
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
							<Box>
								<Stack as="ul" spacing="3">
									{favList.length > 0 ? (
										<Box>
											{favList.map((lift) => {
												const pr = findPR(
													lift.records.items
												);
												return (
													<Box
														flex="1"
														textAlign="left"
														w="100%"
														key={lift.id}
													>
														<Flex
															justify="space-between"
															textAlign="left"
															w="100%"
														>
															<Text>
																{lift.name}
															</Text>
															<Text>
																{pr.reps} x{" "}
																{pr.load}
															</Text>
														</Flex>
													</Box>
												);
											})}
										</Box>
									) : (
										<Box>no favorites</Box>
									)}
								</Stack>
							</Box>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
}

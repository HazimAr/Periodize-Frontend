import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Heading,
	HStack,
	Link,
	Spacer,
	Text,
} from "@chakra-ui/react";
import LiftRecordSummary from "@components/records/liftRecordSummary";
import { Lift } from "API";
import React, { ReactElement } from "react";
interface Props {
	lifts: Lift[];
	fetchMyLifts: any;
}
export default function CategoryAccordion({
	lifts,
	fetchMyLifts,
}: Props): ReactElement {
	const catArr = [
		"main movement",
		"accessory",
		"warm up",
		"cardio",
		"rehab",
		"sport",
	];

	const discArr = [
		"bodybuilding",
		"powerlifting",
		"weightlifting",
		"general",
		"calisthenics",
		"sport",
	];
	return (
		<Accordion
			allowToggle
			allowMultiple
			defaultIndex={[0, 1, 2, 3]}
			p={2}
			mt={4}
			// border="1px solid grey"
			// borderRadius="20px"
		>
			{discArr.map((disc) => {
				return (
					<Box key={disc}>
						{lifts.filter((lift) => lift.discipline === disc)[0] ? (
							<AccordionItem
								key={disc}
								border="none"
								// borderBottomRadius={}
							>
								{({ isExpanded }) => (
									<Box
										my={isExpanded ? "2" : ""}
										bgColor="brand.600"
										borderRadius="md"
										border="1px solid grey"
									>
										<h2>
											<AccordionButton px={4}>
												<Box flex="1" textAlign="left">
													<Heading size="lg">
														{disc}
													</Heading>
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pl={[2, 8]} pb={0}>
											<Box>
												<Accordion
													allowToggle
													allowMultiple
													p={0}
													defaultIndex={[0, 1]}
												>
													{catArr.map((cat) => {
														return (
															<Box key={cat}>
																{lifts.filter(
																	(lift) =>
																		lift.category ===
																			cat &&
																		lift.discipline ===
																			disc
																)[0] ? (
																	<AccordionItem border="none">
																		<h2>
																			<AccordionButton>
																				<Box
																					flex="1"
																					textAlign="left"
																				>
																					<Heading size="md">
																						{
																							cat
																						}
																					</Heading>
																				</Box>
																				<AccordionIcon />
																			</AccordionButton>
																		</h2>
																		<AccordionPanel
																			pb={
																				1
																			}
																			pl={[
																				2,
																				8,
																			]}
																		>
																			<Box>
																				{lifts.filter(
																					(
																						lift
																					) =>
																						lift.discipline ===
																							disc &&
																						lift.category ===
																							cat
																				)[0] ? (
																					<Accordion
																						allowToggle
																						allowMultiple
																					>
																						{lifts
																							.filter(
																								(
																									lift
																								) =>
																									lift.discipline ===
																										disc &&
																									lift.category ===
																										cat
																							)
																							.map(
																								(
																									lift
																								) => {
																									return (
																										<AccordionItem
																											key={
																												lift.id
																											}
																											pl={
																												4
																											}
																											border="none"
																										>
																											<h2>
																												<HStack>
																													<Box
																														textAlign="left"
																														flex="1"
																														whiteSpace="nowrap"
																														display="inline-block"
																													>
																														<Link
																															href={`/dashboard/lifts/${lift.id}`}
																															flex="1"
																														>
																															<Text
																																fontSize="xl"
																																flex="1"
																															>
																																{lift.name.replace(
																																	/(^\w{1})|(\s+\w{1})/g,
																																	(
																																		letter
																																	) =>
																																		letter.toUpperCase()
																																)}
																															</Text>
																														</Link>
																													</Box>
																													<Spacer />
																													<AccordionButton
																														_focus={{
																															border: "none",
																														}}
																													>
																														<Flex
																															justify="flex-end"
																															w="100%"
																														>
																															<AccordionIcon />
																														</Flex>
																													</AccordionButton>
																												</HStack>
																											</h2>

																											<AccordionPanel
																												py={
																													1
																												}
																											>
																												{lift
																													.records
																													.items[0] ? (
																													<LiftRecordSummary
																														lift={
																															lift
																														}
																														fetchMyLifts={
																															fetchMyLifts
																														}
																													/>
																												) : (
																													<Box>
																														No
																														records
																													</Box>
																												)}
																											</AccordionPanel>
																										</AccordionItem>
																									);
																								}
																							)}
																					</Accordion>
																				) : null}
																			</Box>
																		</AccordionPanel>
																	</AccordionItem>
																) : null}
															</Box>
														);
													})}
												</Accordion>
											</Box>
										</AccordionPanel>
									</Box>
								)}
							</AccordionItem>
						) : null}
					</Box>
				);
			})}
		</Accordion>
	);
}

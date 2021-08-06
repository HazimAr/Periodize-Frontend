import { EditIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Heading,
	IconButton,
	Link,
	Text,
} from "@chakra-ui/react";
import { Lift } from "API";
import React, { ReactElement } from "react";
import CreateRecordModal from "../records/createRecordModal";
import DeleteLiftModal from "./deleteLiftModal";
interface Props {
	lifts: Lift[];
	fetchMyLifts: any;
}
export default function BodyAccordion({
	lifts,
	fetchMyLifts,
}: Props): ReactElement {
	const bodyArr = [
		"fullbody",
		"upper",
		"lower",
		"legs",
		"back",
		"chest",
		"shoulders",
		"arms",
		"biceps",
		"triceps",
		"abs",
		"glutes",
		"forearms",
		"cardio",
	];

	return (
		<Accordion
			allowToggle
			allowMultiple
			defaultIndex={[0, 1, 2, 3]}
			p={0}
			mt={4}
		>
			{bodyArr.map((disc) => {
				return (
					<Box key={disc}>
						{lifts.some((lift) => lift.bodypart.includes(disc)) ? (
							<AccordionItem key={disc}>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											<Heading size="md">{disc}</Heading>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pl={8} pb={0}>
									<Box>
										{lifts.filter((lift) =>
											lift.bodypart.includes(disc)
										)[0] ? (
											<Accordion
												allowToggle
												allowMultiple
											>
												{lifts
													.filter((lift) =>
														lift.bodypart.includes(
															disc
														)
													)
													.map((lift) => {
														return (
															<AccordionItem
																key={lift.id}
																pl={4}
																border="none"
															>
																<h2>
																	<Flex justify="space-between">
																		<Box textAlign="left">
																			<Link
																				href={`/dashboard/lifts/${lift.id}`}
																			>
																				<Text fontSize="xl">
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

																		<Flex>
																			<Flex>
																				<Link
																					href={`/dashboard/lifts/${lift.id}`}
																				>
																					<IconButton
																						aria-label="edit lift"
																						size="sm"
																						icon={
																							<EditIcon />
																						}
																						_focus={{
																							outline:
																								"none",
																						}}
																						variant="ghost"
																						zIndex={
																							100
																						}
																					/>
																				</Link>

																				<CreateRecordModal
																					lift={
																						lift
																					}
																					lifts={
																						lifts
																					}
																				/>
																				<DeleteLiftModal
																					lift={
																						lift
																					}
																					fetchMyLifts={
																						fetchMyLifts
																					}
																				/>
																			</Flex>

																			<AccordionButton
																				w="25px"
																				p={
																					0
																				}
																				m={
																					0
																				}
																				_focus={{
																					outline:
																						"none",
																				}}
																			>
																				<AccordionIcon />
																			</AccordionButton>
																		</Flex>
																	</Flex>
																</h2>
																<AccordionPanel>
																	<Box>
																		show pr
																		, 3
																		latest
																		records
																		etc
																	</Box>
																</AccordionPanel>
															</AccordionItem>
														);
													})}
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
	);
}

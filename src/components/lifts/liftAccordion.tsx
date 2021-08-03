import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Center,
	Flex,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import RecordsInAccordian from "@components/lifts/recordsInAccordian";
import { Lift } from "API";
import Fuse from "fuse.js";
import React, { ReactElement, useState } from "react";
import { BsSearch } from "react-icons/bs";
import CreateRecordModal from "../records/createRecordModal";
import CreateLiftModal from "./createLiftModal";
import DeleteLiftModal from "./deleteLiftModal";
interface Props {
	lifts: Lift[];
	setLifts: any;
}

export default function LiftAccordion({
	lifts,
	setLifts,
}: Props): ReactElement {
	console.log(lifts);

	const [query, setQuery] = useState("");

	const fuse = new Fuse(lifts, {
		keys: ["name", "bodypart", "category", "tags"],
		includeScore: true,
	});
	const results = fuse.search(query);
	const liftResults = query ? results.map((result) => result.item) : lifts;

	function handleOnSearch({ currentTarget }) {
		const { value } = currentTarget;
		setQuery(value);
	}

	return (
		<Box h="100%">
			<Flex justify="space-between" align="center">
				<InputGroup size="lg">
					<InputLeftElement pointerEvents="none">
						<BsSearch opacity={0.5} />
					</InputLeftElement>

					<Input
						rounded="md"
						placeholder="Search lifts by name, muscle group, tags, favorite"
						_placeholder={{
							opacity: 1,
						}}
						value={query}
						onChange={handleOnSearch}
					/>
					<InputRightElement>
						<IconButton
							aria-label="clear search"
							icon={<CloseIcon />}
							onClick={() => setQuery("")}
							_focus={{ outline: "none" }}
							variant="ghost"
						/>
					</InputRightElement>
				</InputGroup>

				{/* <Flex>
					<CreateLiftModal lifts={lifts} setLifts={setLifts} />
				</Flex> */}
			</Flex>

			{!lifts[0] ? (
				<Center h="75vh">
					<VStack>
						<Text fontSize="2xl">
							You're not tracking any lifts...
						</Text>
						<Text fontSize="2xl">
							Create a lift to get started 😤
						</Text>
						<CreateLiftModal lifts={lifts} setLifts={setLifts} />
					</VStack>
				</Center>
			) : (
				<Box p="12px" borderRadius="md" my={4}>
					<Accordion allowToggle allowMultiple>
						{liftResults.map((lift) => (
							<AccordionItem key={lift.id} py={2}>
								<h2>
									<Flex justify="space-between">
										<Box textAlign="left">
											<Link
												href={`/dashboard/lifts/${lift.id}`}
											>
												<Text fontSize="xl">
													{lift.name.replace(
														/(^\w{1})|(\s+\w{1})/g,
														(letter) =>
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
												_focus={{ outline: "none" }}
											>
												<AccordionIcon />
											</AccordionButton>
										</Flex>
									</Flex>
								</h2>
								<AccordionPanel pb={4}>
									<Box>
										{lift.records.items.length ? (
											//get most recent 3 records
											<Box>
												<RecordsInAccordian
													lift={lift}
												/>
											</Box>
										) : (
											<Box>No records</Box>
										)}
									</Box>
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</Box>
			)}
		</Box>
	);
}

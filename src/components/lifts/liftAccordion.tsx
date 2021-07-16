import { AddIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Center,
	Flex,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import Fuse from "fuse.js";
import React, { ReactElement, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Lift } from "../../API";
import CreateRecordModal from "../records/createRecordModal";
import BodyPartTag from "./bodyparttag";
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
				<Box>
					<InputGroup size="md">
						<InputLeftElement pointerEvents="none">
							<BsSearch opacity={0.5} />
						</InputLeftElement>

						<Input
							rounded="md"
							placeholder="Search your lifts"
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
				</Box>
				<Flex>
					<CreateLiftModal lifts={lifts} setLifts={setLifts} />

					{/* <CreateRecordModal lifts={lifts} setLifts={setLifts} /> */}
				</Flex>
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
				<Box border="1px solid white" p="12px" borderRadius="md" my={4}>
					<Accordion allowToggle allowMultiple>
						<Flex justify="space-between" my={2}>
							<Text fontSize="2xl">Movement</Text>
							<Box></Box>
							<Box></Box>
						</Flex>
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
										<Box>
											{lift.records.items ? (
												"records to be here"
											) : (
												<i>No Records</i>
											)}
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

												<IconButton
													aria-label="create lift"
													size="sm"
													icon={<AddIcon />}
													_focus={{ outline: "none" }}
													variant="ghost"
													zIndex={100}
												/>
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
									<HStack>
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
												<BodyPartTag
													key={part}
													part={part}
												/>
											))}
										</HStack>
									</HStack>
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</Box>
			)}
		</Box>
	);
}

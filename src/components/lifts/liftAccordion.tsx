import { CloseIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Flex,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Lift } from "API";
import Fuse from "fuse.js";
import React, { ReactElement, useState } from "react";
import { BiBody, BiListUl } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import BodyAccordion from "./bodyAccordion";
import CategoryAccordion from "./categoryAccordion";
import CreateLiftModal from "./createLiftModal";
import FullLiftAccordion from "./fullLiftAccordion";
interface Props {
	lifts: Lift[];
	setLifts: any;
	fetchMyLifts: any;
}

export default function LiftAccordion({
	lifts,
	setLifts,
	fetchMyLifts,
}: Props): ReactElement {
	console.log(lifts);
	const [query, setQuery] = useState("");

	const fuse = new Fuse(lifts, {
		keys: ["name", "bodypart", "category", "tags", "discipline"],
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
				<Box borderRadius="md" mt={2}>
					<Tabs>
						<TabList>
							<Tab>
								<Icon as={BiListUl} />
							</Tab>
							<Tab>
								<Icon as={BiBody} />
							</Tab>
							<Tab>All</Tab>
						</TabList>

						<TabPanels p={0}>
							<TabPanel p={0}>
								<CategoryAccordion
									lifts={liftResults}
									fetchMyLifts={fetchMyLifts}
								/>
							</TabPanel>
							<TabPanel p={0}>
								<BodyAccordion
									lifts={liftResults}
									fetchMyLifts={fetchMyLifts}
								/>
							</TabPanel>

							<TabPanel p={0}>
								<FullLiftAccordion
									lifts={liftResults}
									fetchMyLifts={fetchMyLifts}
								/>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
			)}
		</Box>
	);
}

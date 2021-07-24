import {
	Box,
	Heading,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import { Lift } from "API";
import React, { ReactElement } from "react";
import PRModal from "./prModal";

interface Props {
	lifts: Lift[];
}

export default function PersonalRecord({ lifts }: Props): ReactElement {
	let prs = [];
	for (let i = 0; i < lifts.length; i++) {
		if (!lifts[i].records.items || lifts[i].records.items == undefined) {
			// return null;
			return null;
		} else {
			const pr = lifts[i].records.items.sort(
				(a, b) => b.load - a.load
			)[0];
			console.log(`${lifts[i].name} PR: `, pr);
			prs.push({ lift: lifts[i], record: pr });
		}
	}

	console.log("records: ", prs);
	return (
		<div>
			<Heading>Personal Records</Heading>

			<PRModal lifts={lifts} />
			<Box>
				<Tabs>
					<TabList>
						<Tab>1RM</Tab>
						<Tab>3RM</Tab>
						<Tab>5RM</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Box>
								<Stack as="ul" spacing="4">
									<Box>
										<Heading></Heading>
										<Stack as="ul" spacing="2"></Stack>
									</Box>

									{prs.map((pr) => {
										return (
											<Box key={pr.lift.id}>
												{pr.record ? (
													<Box textAlign="left">
														{pr.lift.name}
														{
															pr.record.load
														} reps: {pr.record.reps}
													</Box>
												) : null}
											</Box>
										);
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
				<Heading>1RM</Heading>
			</Box>
		</div>
	);
}

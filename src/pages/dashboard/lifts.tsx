import {
	Box,
	Heading,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import Layout from "@components/dashboard/layout";
import PageLayout from "@components/dashboard/pageLayout";
import { useUser } from "@context/AuthContext";
import { Lift, ListLiftsQuery } from "API";
import { API } from "aws-amplify";
import { listLifts } from "graphql/queries";
import { useEffect, useState } from "react";
// import MyPrograms from "@components/dashboard/programs/myprograms";
export default function MyProgramsPage(): JSX.Element {
	const { user } = useUser();

	const [lifts, setLifts] = useState<Lift[]>([]);

	useEffect(() => {
		const fetchLiftsFromApi = async (): Promise<Lift[]> => {
			const allLifts = (await API.graphql({ query: listLifts })) as {
				data: ListLiftsQuery;
				errors: any;
			};
			if (allLifts.data) {
				setLifts(allLifts.data.listLifts?.items as Lift[]);
				return allLifts.data.listLifts?.items as Lift[];
			} else {
				throw new Error("Could not getlifts");
			}
		};
		fetchLiftsFromApi();
	}, []);

	console.log("user", user);
	console.log("lifts: ", lifts);

	//izzy: make a table components, warning! categories = [" "]
	return (
		<Layout>
			<PageLayout>
				<Heading>Hello Izzy Lifts</Heading>
				<Box>
					<Table variant="simple" size="md">
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Description</Th>
								<Th isNumeric>Categories</Th>
							</Tr>
						</Thead>
						<Tbody>
							{lifts.map((liftItem) => {
								return (
									<Tr>
										<Td>{liftItem.name}</Td>
										<Td>{liftItem.description} </Td>
										<Td isNumeric>
											{liftItem.category.map(
												(categoryItem) => {
													return (
														<Text>
															{categoryItem}
														</Text>
													);
												}
											)}
										</Td>
									</Tr>
								);
							})}
						</Tbody>
					</Table>
				</Box>
			</PageLayout>
		</Layout>
	);
}

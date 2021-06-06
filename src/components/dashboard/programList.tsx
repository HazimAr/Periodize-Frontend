import { Box, Flex, UnorderedList, Text } from "@chakra-ui/react";

const arr = [

	{
		name: "Cardio",
		experience: "beginner",
		sport: "bodybuilding",
		private: true,
	},
	{
		name: "GAINZ",
		experience: "intermediate",
		sport: "bodybuilding",
		private: false,
	},
	{
		name: "program name",
		experience: "beginner",
		sport: "bodybuilding",
		private: true,
	},
	{
		name: ":(",
		experience: "Advanced",
		sport: "cardio",
		private: false,
	},
];

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

//  allows u to export and use this file in another   | function name  | : tells you type of info from return statement so HTML + Javascript
export default function ProgramList(): JSX.Element {
	return (
		<Flex align="center" /*bg="blue"*/ h="100vh" justify="center">
			<UnorderedList
				m="0px"
				p="0px"
				styleType="none"
				textAlign="left"
				w="100%"
				maxW="1200px"
				spacing="10px"
				//bg="red"
			>
				{arr.map((program) => {
					return (
						<Flex
							flexDir="row"
							justify="space-between"
							align="center"
							w="100%"
						>
							<Box maxW="150px" w="100%">
								<Text>{program.name}</Text>
							</Box>
							<Box maxW="100px" w="100%">
								<Text>{program.experience}</Text>
							</Box>
							<Box maxW="100px" w="100%">
								<Text>{program.sport}</Text>
							</Box>
							<Box maxW="50px" w="100%" textAlign="center">
								{program.private ? (
									<Box bg="green.300" borderRadius="20px">
										<Text color="green">true</Text>
									</Box>
								) : (
									<Box bg="red.300" borderRadius="20px">
										<Text color="red">false</Text>
									</Box>
								)}
							</Box>
							<Flex maxW="60px" w="100%" justify="space-between">
								<FaPencilAlt size="10px" />
								<FaTrashAlt size="10px" />
							</Flex>
						</Flex>
					);
				})}
			</UnorderedList>
		</Flex>
	);
}

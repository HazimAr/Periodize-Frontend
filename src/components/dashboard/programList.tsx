import { Box, Flex, Text, HStack, Heading } from "@chakra-ui/react";
import GlassBox from "@components/glassbg";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Link from "@components/link";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { formatDistanceToNowStrict } from "date-fns";

export default function ProgramList(props: any): JSX.Element {
	// console.log("my props", props.programs);

	return (
		<Flex align="center" justify="center">
			<Box p="16px" maxW="500px" w="100%">
				<Heading size="xl">My Programs</Heading>
				{props.programs
					? props.programs.map((program: any) => {
							return (
								<GlassBox
									borderRadius="5px"
									p="16px"
									textAlign="left"
									op={0.05}
									my="16px"
									key={program.name}
								>
									<Flex justify="space-between" my="16px">
										<Link
											name={program.name}
											href={`/dashboard/program/${program.id}`}
											fontSize="28px"
										/>

										<HStack spacing="12px" mb="8px">
											{program.private ? (
												<LockIcon />
											) : (
												<UnlockIcon />
											)}
											<FaPencilAlt /> <FaTrashAlt />
										</HStack>
									</Flex>
									<HStack my="8px">
										<Text color="text.300" fontSize="12px">
											Created:{" "}
											{formatDistanceToNowStrict(
												program.created * 1000
											)}{" "}
											ago
										</Text>
										{program.updated != program.created && (
											<Text
												color="text.300"
												fontSize="12px"
											>
												Last updated:{" "}
												{formatDistanceToNowStrict(
													program.updated * 1000
												)}{" "}
												ago
											</Text>
										)}
									</HStack>
									<Flex my="16px">
										{program.experience
											.split(",")
											.map((yee: string) => {
												return (
													<Box
														py="1px"
														px="8px"
														border="1px solid grey"
														borderRadius="4px"
														key={yee}
													>
														<Text fontSize="sm">
															{yee
																.charAt(0)
																.toUpperCase() +
																yee.slice(1)}
														</Text>
													</Box>
												);
											})}
									</Flex>
									<Flex my="16px">
										{program.sport
											.split(",")
											.map((yee: string) => {
												return (
													<Box
														py="1px"
														px="8px"
														border="1px solid grey"
														borderRadius="4px"
														key={yee}
													>
														<Text fontSize="sm">
															{yee
																.charAt(0)
																.toUpperCase() +
																yee.slice(1)}
														</Text>
													</Box>
												);
											})}
									</Flex>
									<Text as="u">Summary</Text>
									<Text noOfLines={[1, 2, 3]}>
										{program.description}
									</Text>
								</GlassBox>
							);
					  })
					: ""}
			</Box>
		</Flex>
	);
}

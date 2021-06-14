/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Text, Input } from "@chakra-ui/react";
import AvatarBadge from "@components/avatar";
import Layout from "@components/dashboard/layout";
import Button from "@components/styledbutton";
import useProfile from "@hooks/useProfile";
import BasicModal from "@components/basicmodal";
import { logout } from "@api/auth";
import GlassBgFlex from "@components/glassbg";
import EditProfile from "@components/editprofilemodal";

export default function Profile(): JSX.Element {
	const user: any = useProfile();

	return (
		<>
			{user ? (
				<Flex
					justifyContent="center"
					alignItems="center"
					height="100vh"
					flexDir="column"
				>
					<GlassBgFlex
						borderRadius="15px"
						boxSizing="border-box"
						// border="10px solid transparent"
						maxWidth="650px"
						width="100%"
						h="300px"
						p="10px"
						mt="20px"
						bg="linear-gradient(#8053bb, #49709c, #3f33c27f)"
					>
						<Flex
							alignItems="center"
							mb="20px"
							justify="space-between"
						>
							<Flex align="center">
								<a>
									<AvatarBadge
										name={user.username}
										src={
											user.image
												? user.image
												: "https://bit.ly/broken-link"
										}
										size="lg"
									/>
								</a>
								<Text ml="10px">{user.username}</Text>
							</Flex>
							<BasicModal ml="auto" header="Change"></BasicModal>
						</Flex>
						<Box
							textAlign="left"
							bgColor="#70498fbb"
							p="10px"
							borderRadius="15px"
						>
							<Flex
								alignItems="center"
								mb="10px"
								justify="space-between"
							>
								<Box>
									<Text>Username:</Text>
									<Text>{user.username}</Text>
								</Box>
								{/* <Text ml="auto">...</Text> */}
								<BasicModal header="Edit">
									<EditProfile />
								</BasicModal>
							</Flex>

							<Flex
								alignItems="center"
								mb="10px"
								justify="space-between"
							>
								<Box>
									<Text>Email:</Text>
									<Text>{user.email}</Text>
								</Box>
								<BasicModal
									ml="auto"
									header="Edit"
								></BasicModal>
							</Flex>
							{/* <Flex alignItems="center">
								<Box>
									<Text>Phone Number:</Text>
									<Text>{user.username}</Text>
								</Box>
								<Flex ml="auto" alignItems="center">
									<Text mr="20px">Remove</Text>
									<Button> Edit </Button>
								</Flex>
							</Flex> */}
							<Flex flexDir="row-reverse">
								<Button
									onClick={() => {
										logout();
									}}
									
								>
									Sign Out
								</Button>
							</Flex>
						</Box>
					</GlassBgFlex>

					<Flex flexDir="column" mt="50px" w="800px">
						<Text
							Text
							align="left"
							mb="20px"
							fontSize="30px"
							fontWeight="bold"
							mBottom="20px"
						>
							Advanced Settings
						</Text>
						<Button w="150px" my="10px">
							Reset Password
						</Button>
						<Text mt="10px" align="left">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Cumque amet minima delectus, animi obcaecati
							est vel quibusdam provident qui optio sunt pariatur,
							voluptatum vitae nulla reprehenderit ipsum quos
							mollitia quam!
						</Text>
					</Flex>
				</Flex>
			) : (
				<Text>Loading... </Text>
			)}
		</>
	);
}

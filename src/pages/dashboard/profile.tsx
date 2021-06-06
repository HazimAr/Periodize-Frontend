/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Text } from "@chakra-ui/react";
import AvatarBadge from "@components/avatar";
import Layout from "@components/dashboard/layout";
import Button from "@components/styledbutton";
import useProfile from "@hooks/useProfile";
import CreateModal from "@components/dashboard/create/createModal";

export default function Profile(): JSX.Element {
	const user: any = useProfile();

	return (
		<Layout>
			{user ? (
				<Flex
					justifyContent="center"
					alignItems="center"
					height="100vh"
				>
					<Box
						borderRadius="5px"
						boxSizing="border-box"
						border="10px solid transparent"
						maxWidth="400px"
						width="100%"
					>
						<Flex alignItems="center">
							<a>
							<AvatarBadge
								name={user.username}
								src={
									user.image
										? user.image
										: "https://bit.ly/broken-link"
								}
								size="lg"
							/></a>
							<Text ml="10px">{user.username}</Text>
							<Button ml="auto"> ... </Button>
						</Flex>
						<Box textAlign="left">
							<Flex alignItems="center">
								<Box>
									<Text>Username:</Text>
									<Text>{user.username}</Text>
								</Box>
								{/* <Text ml="auto">...</Text> */}
								<Button ml="auto"> Edit </Button>
							</Flex>

							<Flex alignItems="center">
								<Box>
									<Text>Email:</Text>
									<Text>{user.email}</Text>
								</Box>
								<Button ml="auto"> Edit </Button>
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
<CreateModal/>
						</Box>
					</Box>
				</Flex>
			) : (
				<Text>Loading... </Text>
			)}
			
		</Layout>
	);
}

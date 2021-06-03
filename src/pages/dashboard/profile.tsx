import Layout from "@components/dashboard/layout";
import { Box, Flex, Text } from "@chakra-ui/react";
import useProfile from "@hooks/useProfile";
import AvatarBadge from "@components/avatar";
import Button from "@components/styledbutton";
export default function index(): JSX.Element {
	const user: any = useProfile();

	return (
		<Layout>
			{/* {user ? (
				<Box bg="grey">
					<Flex>
						<AvatarBadge
							name={user.username}
							src={user.image}
							size="xl"
						/>
						<Text>{user.username}</Text>
						<Text>Module later</Text>
					</Flex>
					<Flex></Flex>
				</Box>
			) : (
				<p>Loading... "{user}</p>
			)} */}
			<Flex justifyContent="center" alignItems="center" height="100vh">
				<Box
					borderRadius="5px"
					boxSizing="border-box"
					border="10px solid transparent"
					maxWidth="400px"
					width="100%"
				>
					<Flex alignItems="center">
						<AvatarBadge
							name="Lilin"
							src="https://bit.ly/broken-link"
							size="lg"
						/>
						<Text ml="10px">Username Here</Text>
						<Button ml="auto"> ... </Button>
					</Flex>
					<Box textAlign="left">
						<Flex alignItems="center">
							<Box>
								<Text>Username:</Text>
								<Text>HazAr</Text>
							</Box>
							{/* <Text ml="auto">...</Text> */}
							<Button ml="auto"> Edit </Button>
						</Flex>

						<Flex alignItems="center">
							<Box >
								<Text>Email:</Text>
								<Text>hazimarafa80@gmail.com</Text>
							</Box>
							<Button ml="auto"> Edit </Button>
						</Flex>
						<Flex alignItems="center">
							<Box >
								<Text>Phone Number:</Text>
								<Text>707-777-7777</Text>
							</Box>
							<Flex ml="auto" alignItems="center">
								<Text mr="20px">Remove</Text>
								<Button> Edit </Button>
							</Flex>
						</Flex>
					</Box>
				</Box>
			</Flex>
		</Layout>
	);
}

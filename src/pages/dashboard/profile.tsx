import Layout from "@components/dashboard/layout";
import { Box, Flex, Text } from "@chakra-ui/react";
import useProfile from "@hooks/useProfile";
import AvatarBadge from "@components/avatar";
export default function index(): JSX.Element {
	const user: any = useProfile();

	return (
		<Layout>
			{user ? (
				<Box bg="grey">
					<Flex>
						<AvatarBadge name={user.username} src={user.image} />
						<Text>{user.username}</Text>
						<Text>Module later</Text>
					</Flex>
					<Flex></Flex>
				</Box>
			) : (
				<p>Loading...</p>
			)}
		</Layout>
	);
}

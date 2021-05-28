import styled from "styled-components";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "@components/Link";
import ColorModeButton from "@components/ColorModeButton";
import { getCookie } from "@lib/cookie";
import { logout } from "@api/auth";
import Avatar from "@components/Avatar";
const Header = styled.header`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

export default function Main(): JSX.Element {
	// const [user, setUser] = useState(undefined);
	// useEffect(() => {
	// 	const user = getCookie("me");
	// 	if (user) {
	// 		setUser(user);
	// 	}
	// }, []);

	let body = null;
	// if (user) {
	// 	body = (
	// 		<Flex align="center">
	// 			<ColorModeButton />
	// 			<Avatar
	// 				name={user.username}
	// 				src={user.image ? user.image : "https://bit.ly/broken-link"}
	// 			/>
	// 			<Box mr={3}>
	// 				<Link href="/dashboard/profile" name={user.username} />
	// 			</Box>
	// 			<Button
	// 				onClick={() => {
	// 					logout();
	// 				}}
	// 				variant="link"
	// 			>
	// 				logout
	// 			</Button>
	// 		</Flex>
	// 	);

	// 	// user is logged in
	// } else {
	body = (
		<Flex align="center">
			<ColorModeButton />
			<Box mr={3}>
				<Link href="/register" name="register" />
			</Box>
			<Link href="/login" name="login" />
		</Flex>
	);
	// }

	return (
		<Box h="74px">
			<Flex
				position="fixed"
				width="100%"
				justify-content="center"
				align-items="center"
				z-index="100"
				bgGradient="linear(to-r, #11030d,#38085c)"
			>
				<Flex
					maxW="1200px"
					align="center"
					width="100%"
					px="10px"
					py="25px"
					textAlign="center"
					margin="auto"
				>
					<Link href="/" name="Periodize" />

					<Spacer />

					{body}
				</Flex>
			</Flex>
		</Box>
	);
}

import styled from "styled-components";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "@components/Link";
import ColorModeButton from "@components/colormodebutton";
import { getProfileData } from "@api/profile";
import { getCookie } from "@lib/cookie";
import { logout } from "@api/auth";

const Header = styled.header`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

export default function Main() {
	const [user, setUser] = useState();
	useEffect(() => {
		const sess = getCookie("sessionid");
		if (sess) {
			getProfileData().then((data) => {
				if (data.code == 200) {
					setUser(data.data);
				}
			});
		}
	}, []);

	let body = null;
	if (user) {
		body = (
			<Flex align="center">
				<ColorModeButton />
				<Box mr={3}>
					<Link href="/dashboard/profile" name={user.username} />
				</Box>
				<Button
					onClick={() => {
						logout();
					}}
					variant="link"
				>
					logout
				</Button>
			</Flex>
		);

		// user is logged in
	} else {
		body = (
			<Flex align="center">
				<ColorModeButton />
				<Box mr={3}>
					<Link href="/register" name="register" />
				</Box>
				<Link href="/login" name="login" />
			</Flex>
		);
	}

	return (
		<Box h="110px">
			<Header>
				<Flex
					maxW="1200px"
					align="center"
					width="100%"
					px="10px"
					py="25px"
					textAlign="center"
				>
					<Link href="/" name="Periodize" />
					<Spacer />

					{body}
				</Flex>
			</Header>
		</Box>
	);
}

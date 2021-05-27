import styled from "styled-components";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "@components/Link";
import ColorModeButton from "@components/ColorModeButton";
import { getProfileData } from "@api/profile";
import { getCookie } from "@lib/cookie";

const Header = styled.header`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

export default function Main(): JSX.Element {
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
				<Link href="/dashboard/profile" name={user.username} />
				<Button onClick={async () => {}} variant="link">
					logout
				</Button>
			</Flex>
		);

		// user is logged in
	} else {
		body = (
			<Flex justify="space-around" align="center">
				<ColorModeButton />
				<Link href="/login" name="login" />
				<Link href="/register" name="register" />
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

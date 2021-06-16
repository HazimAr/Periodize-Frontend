/* eslint-disable no-void */
import { getProfileData } from "@api/profile";
import { getCookie } from "@lib/cookie";
import React, { useEffect } from "react";

import { Center, Flex } from "@chakra-ui/react";
import { MobileTopBar } from "@components/dash2/mobiletopbar";
import { Sidebar } from "@components/dash2/sidebar";
// eslint-disable-next-line import/no-default-export
export default function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	useEffect(() => {
		const sess = getCookie("sessionid");
		if (!sess) {
			window.location.href = "/login";
			return;
		}
		getProfileData().then((data) => {
			if (!data.data) {
				window.location.href = "/login";
				return;
			}
		});
	}, []);
	return (
		<main id="main">
			<Flex h="100vh" flexDirection="column" position="fixed">
				<MobileTopBar />
				<Flex flex="1">
					<Sidebar display={{ base: "none", md: "flex" }} />
					<Center>{children}</Center>
				</Flex>
			</Flex>
		</main>
	);
}

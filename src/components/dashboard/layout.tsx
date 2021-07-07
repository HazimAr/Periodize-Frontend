/* eslint-disable no-void */
import { Flex } from "@chakra-ui/react";
import { MobileTopBar } from "@components/dash2/mobiletopbar";
import { Sidebar } from "@components/dash2/sidebar";
import React from "react";

// eslint-disable-next-line import/no-default-export
export default function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<main id="main">
			<Flex h="100vh" flexDirection="column" position="fixed" w="100%">
				<MobileTopBar />
				<Flex flex="1">
					<Sidebar display={{ base: "none", md: "flex" }} />

					{children}
				</Flex>
			</Flex>
		</main>
	);
}

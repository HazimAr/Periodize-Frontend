import { Flex } from "@chakra-ui/react";
import React from "react";
import { MobileTopBar } from "./mobiletopbar";
import { Sidebar } from "./sidebar";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<Flex
			h="100vh"
			flexDirection="column"
			w="100%"
			overflowY="auto"
			overflowX="hidden"
		>
			<MobileTopBar />
			<Flex flex="1">
				<Sidebar display={{ base: "none", md: "flex" }} h="100vh" />
				<Flex
					h="100%"
					w="100%"
					mx={{ base: "4px", lg: 25 }}
					align="center"
					flexDir="column"
					pt={6}
				>
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}

import { Flex } from "@chakra-ui/react";
// import * as React from "react";
import { MobileTopBar } from "@components/dash2/mobiletopbar";
import { Sidebar } from "@components/dash2/sidebar";

export default function Dash() {
	return (
		<Flex h="100vh" flexDirection="column">
			<MobileTopBar />
			<Flex flex="1" overflow="hidden">
				<Sidebar display={{ base: "none", md: "flex" }} />
			</Flex>
		</Flex>
	);
}

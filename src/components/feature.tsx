import { Box, Stack, Text, Flex, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";

interface FeatureProps {
	title: string;
	children: React.ReactNode;
	icon: React.ReactElement;
}

export const Feature = (props: FeatureProps) => {
	const { title, children, icon } = props;
	return (
		<Flex
			spacing={{ base: "3", md: "6" }}
			direction={{ base: "column", md: "row" }}
			align="center"
		>
			<Box fontSize="6xl">{icon}</Box>
			<Stack spacing="1">
				<Text fontWeight="extrabold" fontSize="lg">
					{title}
				</Text>
				<Box color={mode("gray.600", "gray.400")}>{children}</Box>
			</Stack>
		</Flex>
	);
};

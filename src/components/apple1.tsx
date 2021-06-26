import {
	Flex,
	Text,
	Heading,
	Button,
	SimpleGrid,
	Box,
	BoxProps,
	TextProps,
} from "@chakra-ui/react";
import React from "react";

import { motion } from "framer-motion";

const MotionText = motion<TextProps>(Text);
const MotionBox = motion<BoxProps>(Box);

export default function AppleBox1(): JSX.Element {
	return (
		<SimpleGrid columns={{ base: 1, sm: 2, lg: 2 }} spacing={2} my="20px">
			<Box
				bg="linear-gradient(to bottom right, #8c00ff7b, #cf9f9fcc)"
				h="500px"
				borderRadius="10px"
			>
				<MotionText whileHover={{ scale: 1.5 }} fontSize="40px">
					Text
				</MotionText>
			</Box>
			<Box
				bg="linear-gradient(to bottom right, #8c00ff7b, #7cadc4cc)"
				h="500px"
				borderRadius="10px"
			>
				<MotionText whileHover={{ scale: 1.5 }} fontSize="40px">
					Text
				</MotionText>
			</Box>
			<Box
				bg="linear-gradient(to bottom right, #0026ff7a, #7ca7c4cc)"
				h="500px"
				borderRadius="10px"
			>
				<MotionText whileHover={{ scale: 1.5 }} fontSize="40px">
					Text
				</MotionText>
			</Box>
			<Box
				bg="linear-gradient(to bottom right, #0026ff7a, #7cadc4cc)"
				h="500px"
				borderRadius="10px"
			>
				<MotionText whileHover={{ scale: 1.5 }} fontSize="40px">
					Text
				</MotionText>
			</Box>
		</SimpleGrid>
	);
}

import { Flex, Box, Text } from "@chakra-ui/react";

export default function Hero(props: any): JSX.Element {
	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="flex-start"
			// maxW="1200px"
			width="100%"
			{...props}
		>
			<Flex width="100%" height="50vh" bg="tomato">
				<Flex flexDir="column" width="100%">
					<Text>Who We Are</Text>
					<Text>Periodize is the next generation way of </Text>
				</Flex>
				<Flex flexDir="column" width="100%">
					<Text>Who We Are</Text>
					<Text>Who We Are</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}

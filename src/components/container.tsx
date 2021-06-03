import { Flex } from "@chakra-ui/react";

export default function Container({ children, props }: any): JSX.Element {
	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="flex-start"
			maxW="1200px"
			{...props}
			margin="auto"
		>
			{children}
		</Flex>
	);
}

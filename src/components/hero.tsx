import { Flex } from "@chakra-ui/react";

export default function Hero(props: any): JSX.Element {
	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="flex-start"
			maxW="1200px"
			{...props}
		/>
	);
}

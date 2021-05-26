import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

type LinkProps = {
	href: string;
	name: string;
};

export default function Link({ href, name }: LinkProps): JSX.Element {
	return (
		<Box mr={{ base: 0, sm: 8 }}>
			<ChakraLink as={NextLink} href={href}>
				{name}
			</ChakraLink>
		</Box>
	);
}

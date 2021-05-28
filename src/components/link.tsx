import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

type LinkProps = {
	href: string;
	name: string;
};

export default function Link({ href, name }: LinkProps): JSX.Element {
	return (
		<ChakraLink as={NextLink} href={href}>
			{name}
		</ChakraLink>
	);
}

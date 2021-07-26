import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function nextChakraLink({
	href,
	children,
	...props
}: any): JSX.Element {
	return (
		<NextLink href={href} passHref>
			<Link {...props}>{children}</Link>
		</NextLink>
	);
}

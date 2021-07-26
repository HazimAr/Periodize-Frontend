import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function nextChakraLink({
	href,
	children,
	...props
}: any): JSX.Element {
	return (
		<NextLink href={href} passHref>
			<Link
				{...props}
				_active={{ boxShadow: "none" }}
				_focus={{ boxShadow: "none" }}
			>
				{children}
			</Link>
		</NextLink>
	);
}

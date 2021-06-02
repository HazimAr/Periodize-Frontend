import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface CLinkProps {
	href: string;
	name: string;
}

export default function CLink({ href, name }: CLinkProps): JSX.Element {
	return (
		<Link as={NextLink} href={href}>
			{name}
		</Link>
	);
}

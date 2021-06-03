/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

type CLinkProps = {
	href: string;
	name: string;
};

// eslint-disable-next-line import/no-default-export
export default function CLink({ href, name }: CLinkProps): JSX.Element {
	return (
		<Link as={NextLink} href={href}>
			{name}
		</Link>
	);
}

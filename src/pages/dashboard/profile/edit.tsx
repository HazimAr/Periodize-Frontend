import React from "react";
import Layout from "@components/dashboard/layout";

import { Box, Heading } from "@chakra-ui/react";
import AvatarBadge from "@components/avatar";
export default function Edit(): JSX.Element {
	return (
		<Layout>
			<Heading as="h2" size="xl">
				Profile
			</Heading>
			<AvatarBadge name="put" size="xl" src="/Hazim.png" />
		</Layout>
	);
}

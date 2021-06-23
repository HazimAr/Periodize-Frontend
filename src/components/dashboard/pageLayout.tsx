/* eslint-disable no-void */

import { Center, Flex, Container } from "@chakra-ui/react";

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<Flex flexDir="column" w="100%" mt="16px" p="18px">
            <Container maxW="container.md">
                {children}
            </Container>
		</Flex>
	);
}

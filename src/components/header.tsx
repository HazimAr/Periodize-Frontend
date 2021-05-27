import styled from "styled-components";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Link from "@components/Link";
import ColorModeButton from "@components/ColorModeButton";

const Header = styled.header`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

export default function Main(): JSX.Element {
	return (
		<Box h="110px">
			<Header>
				<Flex
					maxW="1200px"
					align="center"
					width="100%"
					px="5px"
					py="25"
					textAlign="center"
				>
					<Link href="/" name="Periodize" />
					<Spacer />
					<Flex align="center">
						<ColorModeButton />
						<Link href="/login" name="login" />
					</Flex>
				</Flex>
			</Header>
		</Box>
	);
}

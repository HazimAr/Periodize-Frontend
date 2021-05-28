import { Box, Flex, Image } from "@chakra-ui/react";
import styled from "styled-components";
// import Image from "next/image";
const Hero = styled.div`
	width: 100%;
	min-height: 95vh;
	text-align: left;
	box-sizing: border-box;

	margin: 20px;
	position: relative;
	background-color: #2e3748;

	top: 0;
	transition: all ease-in-out 0.2s;
	&:hover {
		top: -8px;
	}
	& h2 {
		color: #52baff;
	}
`;
export default function Home(): JSX.Element {
	return (
		<Flex flexDir="column" align="center">
			<Flex flexDir={{ base: "column", lg: "row" }}>
				<Image
					src="/gym.jpg"
					alt="me"
					width={{ base: "100%", lg: "50%" }}
					height="100%"
				/>
				<Image
					src="/gym3.jpg"
					alt="me"
					width={{ base: "100%", lg: "50%" }}
					height="100%"
				/>
			</Flex>
		</Flex>
	);
}

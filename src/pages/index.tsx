import { Button } from "@chakra-ui/button";
import { Container, Box, Heading, Flex, Text } from "@chakra-ui/layout";
import HeadFoot from "@components/home/headfoot";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled(Button)`
	transition: all ease 0.2s;
	svg {
		margin-left: 5px;
		transition: all ease 0.4s;
	}
	:hover {
		cursor: pointer;
		background-color: #007fb9;
		svg {
			transform: translateX(7.5px);
		}
	}
`;

export default function Home(): JSX.Element {
	return (
		<HeadFoot>
			<Container maxW="1200px" color="white">
				<Flex justify="space-between" align="center">
					<Box maxW="500px" textAlign="center">
						<Box my="20px">
							<Heading size="3xl">We Are Periodize</Heading>
							<Text fontSize="2xl">
								The all in 1 solution to your workout needs
							</Text>
						</Box>
						<StyledButton p="25px" fontSize="3xl" bg="#6C63FF">
							Sign Up Now
							<AiOutlineRight size="25px" />
						</StyledButton>
					</Box>
					<Image
						src="/undraw/intro.svg"
						height="500px"
						width="500px"
					/>
				</Flex>
			</Container>
		</HeadFoot>
	);
}

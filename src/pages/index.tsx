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
		transform: scale(1.1);
		svg {
			transform: translateX(7.5px);
		}
	}
`;

export default function Home(): JSX.Element {
	return (
		<HeadFoot>
			<Flex justify="center" align="center" mt="-40px" bg="#121129">
				<Container maxW="1200px" color="white">
					<Flex justify="center" align="center" wrap="wrap">
						<Box mx="90px" maxW="500px" textAlign="center">
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
			</Flex>
			<svg
				className="wave"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#121129"
					fillOpacity="1"
					d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
				></path>
			</svg>
		</HeadFoot>
	);
}

import {
	Flex,
	chakra,
	Image,
	Heading,
	Text,
	Container,
	Link,
	HStack,
	VStack,
	Avatar,
	Box,
	Wrap,
	Center,
	WrapItem,
	TagCloseButton,
} from "@chakra-ui/react";
import styled from "styled-components";

const StaffC = styled(Box)`
	body {
		background-color: #28223f;
		font-family: Montserrat, sans-serif;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		min-height: 100vh;
		margin: 0;
	}

	h3 {
		margin: 10px 0;
	}

	h6 {
		margin: 5px 0;
		text-transform: uppercase;
	}

	p {
		font-size: 14px;
		line-height: 21px;
	}

	.card-container {
		background-color: #231e39;
		border-radius: 5px;
		box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
		color: #b3b8cd;
		padding-top: 30px;
		position: relative;
		width: 350px;
		max-width: 100%;
		text-align: center;
	}

	.card-container .pro {
		color: #231e39;
		background-color: #febb0b;
		border-radius: 3px;
		font-size: 14px;
		font-weight: bold;
		padding: 3px 7px;
		position: absolute;
		top: 30px;
		left: 30px;
	}

	.card-container .round {
		border: 1px solid #03bfcb;
		border-radius: 50%;
		padding: 7px;
	}

	button.primary {
		background-color: #03bfcb;
		border: 1px solid #03bfcb;
		border-radius: 3px;
		color: #231e39;
		font-family: Montserrat, sans-serif;
		font-weight: 500;
		padding: 10px 25px;
	}

	button.primary.ghost {
		background-color: transparent;
		color: #02899c;
	}

	.skills ul li {
		border: 1px solid #2d2747;
		border-radius: 2px;
		display: inline-block;
		font-size: 12px;
		margin: 0 7px 7px 0;
		padding: 7px;
	}
`;
import { FaGithub, FaLinkedin } from "react-icons/fa";
interface StaffCardProps {
	src: string;
	name: string;
	city: string;
	tags: string[];
	// sub: string;
	// github: string;
	// para: string;
	// portfolio: string;
	// linkedIn: string;
}

const CFaGithub = chakra(FaGithub);
const CFaLinkedIn = chakra(FaLinkedin);
export default function StaffCard({
	src = "",
	name,
	city,
	tags,
}: // sub,
// github,
// portfolio,
// para,
// linkedIn,
StaffCardProps): JSX.Element {
	return (
		<Flex
			flexDir="column"
			justify="center"
			align="center"
			width="350px"
			bg="#231e39"
			borderRadius="5px"
		>
			<Avatar src={src} alt="user" size="2xl" mt="24px" />
			<VStack spacing="2px" mt="8px">
				<Heading size="md" color="white">
					{name}
				</Heading>
				<Text color="white">{city}</Text>
				<Text color="white" fontSize="xs">
					User interface designer and <br /> front-end developer
				</Text>
				<HStack>
					<CFaGithub color="white" />
				</HStack>
			</VStack>

			<Box bgColor="#2d2747" mt="8px" px="16px" py="12px">
				<Wrap w="95%" margin="auto">
					{tags.map((tag) => {
						return (
							<WrapItem key="tag">
								<Box
									py="1px"
									px="8px"
									border="1px solid grey"
									borderRadius="4px"
									color="white"
								>
									<Text fontSize="sm">{tag}</Text>
								</Box>
							</WrapItem>
						);
					})}
				</Wrap>
			</Box>
		</Flex>
	);
}

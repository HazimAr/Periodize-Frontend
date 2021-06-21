import { Container, Box, Heading, Flex, Text } from "@chakra-ui/react";
import CarouselCenter from "@components/carousel";
import HeadFoot from "@components/home/headfoot";
import Button from "@components/styledbutton";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import Link from "@components/link";

const StyledButton = styled(Button)`
	transition: all ease 0.2s;
	transform: translateX(5px);

	svg {
		margin-left: 10px;
		transition: all ease 0.4s;
	}
	:hover {
		cursor: pointer;
		svg {
			transform: translateX(10px);
		}
	}
`;

const StyledText = styled(Text)``;

const LearnMore = styled(Text)`
	${StyledText} {
		margin-top: 10px;
		margin-bottom: 3px;
	}
`;

const Wave = styled.svg`
	position: absolute;
	z-index: -10;
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
							<StyledButton p="25px" fontSize="3xl">
								Sign Up Now
								<AiOutlineRight size="25px" />
							</StyledButton>
						</Box>
						<Image
							src="/undraw/intro.svg"
							height="500px"
							width="500px"
							alt="guy doing pushups"
						/>
					</Flex>
				</Container>
			</Flex>
			<Wave
				className="wave"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#121129"
					fillOpacity="1"
					d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
				/>
			</Wave>
			<Flex justify="center">
				<Flex maxW="1200px" align="center" flexDir="row">
					<Flex align="center" justify="center" w="50%">
						<Image
							height="500px"
							width="500px"
							src="/undraw/workout.svg"
							alt="workout"
						/>
					</Flex>
					<LearnMore w="50%" ml="40px" textAlign="left">
						<Box>
							<Heading size="lg">Here's What You Get</Heading>
							<StyledText size="sm">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Cumque amet minima delectus,
								animi obcaecati est vel quibusdam provident qui
								optio sunt pariatur, voluptatum vitae nulla
								reprehenderit ipsum quos mollitia quam!
							</StyledText>
						</Box>
						<Flex my="20px" justify="space-between">
							<Box>
								<Heading size="md"> Landing Pages</Heading>
								<StyledText size="sm">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Cumque amet minima
								</StyledText>
								<Link href="/register" name="Learn More" />
							</Box>
							<Box>
								<Heading size="md">Page Examples</Heading>
								<StyledText size="sm">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Cumque amet minima
								</StyledText>
								<Link href="/register" name="Learn More" />
							</Box>
						</Flex>
						<Flex justify="space-between">
							<Box>
								<Heading size="md">Layouts</Heading>
								<StyledText size="sm">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Cumque amet minima
								</StyledText>
								<Link href="/register" name="Learn More" />
							</Box>
							<Box>
								<Heading size="md">Modular Sections</Heading>
								<StyledText size="sm">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Cumque amet minima
								</StyledText>
								<Link href="/register" name="Learn More" />
							</Box>
						</Flex>
					</LearnMore>
				</Flex>
			</Flex>

			<Flex
				justify="center"
				bgImg="/lpworkout2.jpg"
				h="300px"
				bgSize="100%"
				bgPosition="0% 80%"
				bgRepeat="no-repeat"
			>
				<Flex
					maxW="100%"
					align="center"
					flexDir="row"
					my="50px"
					textAlign="center"
					wrap="wrap"
				>
					<Text fontSize="6vw" fontWeight="bold">
						Obtain Your Strength.
					</Text>
				</Flex>
			</Flex>
			<CarouselCenter />
		</HeadFoot>
	);
}

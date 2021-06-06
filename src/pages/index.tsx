import { Container, Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import HeadFoot from "@components/home/headfoot";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import Link from "@components/link";

const StyledButton = styled(Button)`
	transition: all ease 0.2s;
	svg {
		margin-left: 10px;
		transition: all ease 0.4s;
	}
	:hover {
		cursor: pointer;
		background: #007fb9;
		svg {
			transform: translateX(10px);
		}
	}
`;

const margin = 0;

const StyledText = styled(Text)``;
const Mid = styled(Flex)`
	@media (max-width: 4000px) {
		margin-top: ${margin - 940}px;
	}
	@media (max-width: 3900px) {
		margin-top: ${margin - 910}px;
	}
	@media (max-width: 3800px) {
		margin-top: ${margin - 880}px;
	}
	@media (max-width: 3700px) {
		margin-top: ${margin - 850}px;
	}
	@media (max-width: 3600px) {
		margin-top: ${margin - 820}px;
	}
	@media (max-width: 3500px) {
		margin-top: ${margin - 790}px;
	}
	@media (max-width: 3400px) {
		margin-top: ${margin - 760}px;
	}
	@media (max-width: 3300px) {
		margin-top: ${margin - 730}px;
	}
	@media (max-width: 3200px) {
		margin-top: ${margin - 700}px;
	}
	@media (max-width: 3100px) {
		margin-top: ${margin - 670}px;
	}
	@media (max-width: 3000px) {
		margin-top: ${margin - 640}px;
	}
	@media (max-width: 2900px) {
		margin-top: ${margin - 610}px;
	}
	@media (max-width: 2800px) {
		margin-top: ${margin - 580}px;
	}
	@media (max-width: 2700px) {
		margin-top: ${margin - 550}px;
	}
	@media (max-width: 2600px) {
		margin-top: ${margin - 520}px;
	}
	@media (max-width: 2500px) {
		margin-top: ${margin - 490}px;
	}
	@media (max-width: 2400px) {
		margin-top: ${margin - 460}px;
	}
	@media (max-width: 2300px) {
		margin-top: ${margin - 460}px;
	}
	@media (max-width: 2200px) {
		margin-top: ${margin - 430}px;
	}
	@media (max-width: 2100px) {
		margin-top: ${margin - 400}px;
	}
	@media (max-width: 2000px) {
		margin-top: ${margin - 370}px;
	}
	@media (max-width: 1900px) {
		margin-top: ${margin - 340}px;
	}
	@media (max-width: 1800px) {
		margin-top: ${margin - 310}px;
	}
	@media (max-width: 1700px) {
		margin-top: ${margin - 250}px;
	}
	@media (max-width: 1600px) {
		margin-top: ${margin - 220}px;
	}
	@media (max-width: 1500px) {
		margin-top: ${margin - 190}px;
	}
	@media (max-width: 1400px) {
		margin-top: ${margin - 160}px;
	}
	@media (max-width: 1300px) {
		margin-top: ${margin - 130}px;
	}
	@media (max-width: 1200px) {
		margin-top: ${margin - 120}px;
	}
	@media (max-width: 1100px) {
		margin-top: ${margin - 90}px;
	}
	@media (max-width: 1000px) {
		margin-top: ${margin - 60}px;
	}
	@media (max-width: 900px) {
		margin-top: ${margin - 30}px;
	}
	@media (max-width: 800px) {
		margin-top: ${margin}px;
	}
	@media (max-width: 700px) {
		flex-wrap: wrap;
		justify-content: center;
		margin-top: ${margin + 30}px;
	}
	@media (max-width: 600px) {
		margin-top: ${margin + 60}px;
	}
	@media (max-width: 500px) {
		margin-top: ${margin + 60}px;
	}
	@media (max-width: 400px) {
		margin-top: ${margin + 90}px;
	}
	@media (max-width: 300px) {
		margin-top: ${margin + 120}px;
	}
	@media (max-width: 200px) {
		margin-top: ${margin + 150}px;
	}
`;
const LearnMore = styled(Text)`
	${StyledText} {
		margin-top: 10px;
		margin-bottom: 3px;
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
				/>
			</svg>
			<Mid justify="center">
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
			</Mid>
		</HeadFoot>
	);
}

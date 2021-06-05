import {
	Container,
	Text,
	Image,
	Box,
	Flex,
	Heading,
	Button,
	Avatar,
} from "@chakra-ui/react";
import HeadFoot from "@components/home/headfoot";
import StaffCard from "@components/about/staffcard";

export default function About(): JSX.Element {
	return (
		<Flex height="100%" flexDir="column">
			<Flex
				h="100vh"
				w="100vw"
				align="center"
				justify="center"
				bgColor="gray.400"
				// bgImage="/lu.jpg"
				// objectFit="contain"
			>
				<Flex flexDir="column">
					<Heading
						size="3xl"
						mb="32px"
						justifySelf="left"
						color="white"
					>
						Who are we?
					</Heading>
					<Box maxW="200px">
						<Text align="left" color="white">
							We are a team of american developers recreating how
							athletes, coaches, and the everyday person
							approaches fitness. We aim to perfect the processes
							of periodizaiton and programming to create optimal
							training regiments
						</Text>
					</Box>
				</Flex>
			</Flex>

			<Flex
				height="100vh"
				width="100vw"
				align="center"
				justify="center"
				bgColor="gray.600"
			>
				<Flex flexDir="column" align="center" justify="center">
					<Heading color="white">The Team</Heading>
					<Flex
						justify="center"
						align="center"
						bg="gray.700"
						// width="60%"
						flexDir="column"
						borderRadius="5px"
					>
						<StaffCard
							name="hazim"
							city="houston"
							src="/ai.jpg"
							tags={[
								"ui",
								"gym",
								"tendon",
								"biking",
								"cooking",
								"yeetyah",
							]}
						/>
					</Flex>
					<Flex justify="space-between" align="center">
						<Image src="/lu.jpg" objectFit="cover" width="20%" />
						<Container>
							<Text align="left" color="white">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptates, impedit doloremque
								eius quasi odio molestias quod esse praesentium
							</Text>
						</Container>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}

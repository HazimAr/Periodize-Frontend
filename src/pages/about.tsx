import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import StaffCard from "@components/about/staffcard";
import HeadFoot from "@components/home/headfoot";

export default function About(): JSX.Element {
	const staff = [
		{
			name: "Izzy Developer",
			city: "Timbuktu",
			github: "google.com",
			tags: ["biking", "tea", "coffee", "furry"],
			src: "/ai.jpg",
		},
		{
			name: "hazim dev",
			city: "houston",
			github: "google.com",
			tags: ["biking", "tea", "coffee", "furry"],
			src: "/ai.jpg",
		},
	];
	return (
		<HeadFoot>
			<Flex height="100%" flexDir="column">
				<Flex h="100vh" w="100vw" align="center" justify="center">
					<Flex flexDir="column">
						<Heading size="3xl" mb="32px" justifySelf="left">
							Who are we?
						</Heading>
						<Box maxW="200px">
							<Text align="left">
								We are a team of american developers recreating
								how athletes, coaches, and the everyday person
								approaches fitness. We aim to perfect the
								processes of periodization and programming to
								create optimal training regiments
							</Text>
						</Box>
					</Flex>
				</Flex>
				<Box>
					<Heading>Izzy Dev</Heading>
				</Box>
				<Flex
					height="100vh"
					width="100vw"
					align="center"
					justify="center"
					// bgColor="gray.600"
					bgImage="/purple.jpg"
					objectFit="cover"
				>
					<Flex flexDir="column" align="center" justify="center">
						<Heading color="white">The Team</Heading>
						<Flex
							justify="center"
							align="center"
							// width="60%"
							flexDir="column"
							borderRadius="5px"
						>
							{staff.map((person) => {
								return (
									<StaffCard
										name={person.name}
										city={person.city}
										src={person.src}
										tags={person.tags}
										github={person.github}
									/>
								);
							})}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</HeadFoot>
	);
}

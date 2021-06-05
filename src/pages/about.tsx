import { Container, Text, Image, Box, Flex, Heading } from "@chakra-ui/react";
import HeadFoot from "@components/home/headfoot";

export default function About(): JSX.Element {
	return (
		<HeadFoot>
			<Flex
				height="100vh"
				width="100vw"
				align="flex-start"
				justify="center"
				bgImage="/lu.jpg"

				// filter="grayscale(100%)"
			>
				<Box w="33%" mt="86px">
					<Heading size="3xl" mb="32px" align="center" color="black">
						Our Story
					</Heading>
					<Text align="left" color="black">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptates, impedit doloremque eius quasi odio molestias
						quod esse praesentium rem libero ipsa enim! Expedita
						corrupti, dolorum iste commodi explicabo excepturi nam.
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
					</Text>
				</Box>
			</Flex>
			<Flex height="100vh" width="100vw" align="center" justify="center">
				<Box w="33%" mt="86px">
					<Heading size="3xl" mb="32px" align="center" color="black">
						Cutting Edge Technology :D
					</Heading>
					<Flex>
						<Flex
							bgColor="blue"
							flexDir="column"
							w="400px"
							borderRadius="5px"
						>
							<Image src="/lu.jpg" />
							<Text align="left" color="black">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptates, impedit doloremque
								eius quasi odio molestias quod esse praesentium
							</Text>
						</Flex>{" "}
						<Flex
							bgColor="blue"
							flexDir="column"
							w="400px"
							borderRadius="5px"
							mx="8px"
						>
							<Image src="/lu.jpg" />
							<Text align="left" color="black">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptates, impedit doloremque
								eius quasi odio molestias quod esse praesentium
								rem libero ipsa enim!
							</Text>
						</Flex>
						<Flex
							bgColor="blue"
							flexDir="column"
							w="400px"
							borderRadius="5px"
						>
							<Image src="/lu.jpg" />
							<Text align="left" color="black">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptates, impedit doloremque
								eius quasi odio molestias quod esse praesentium
							</Text>
						</Flex>
					</Flex>
				</Box>
			</Flex>
			<Image
				src="https://via.placeholder.com/150"
				alt="placeholder"
				my="15px"
			/>

			<Text fontSize="3xl" mb="15px">
				Mission
			</Text>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Voluptates, impedit doloremque eius quasi odio molestias quod
				esse praesentium rem libero ipsa enim! Expedita corrupti,
				dolorum iste commodi explicabo excepturi nam. Lorem ipsum dolor
				sit amet consectetur, adipisicing elit. Quibusdam aliquid
				architecto consequuntur id sint, minima, totam debitis a, ipsum
				voluptate dolorum voluptatem. Tenetur odio consequatur, maiores
				sit modi autem nisi?
			</Text>
			<Image
				src="https://via.placeholder.com/150"
				alt="placeholder"
				my="15px"
			/>
			<Text fontSize="3xl" mb="15px">
				Team
			</Text>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Voluptates, impedit doloremque eius quasi odio molestias quod
				esse praesentium rem libero ipsa enim! Expedita corrupti,
				dolorum iste commodi explicabo excepturi nam. Lorem ipsum dolor
				sit amet consectetur, adipisicing elit. Quibusdam aliquid
				architecto consequuntur id sint, minima, totam debitis a, ipsum
				voluptate dolorum voluptatem. Tenetur odio consequatur, maiores
				sit modi autem nisi?
			</Text>
			<Image
				src="https://via.placeholder.com/150"
				alt="placeholder"
				my="15px"
			/>
		</HeadFoot>
	);
}

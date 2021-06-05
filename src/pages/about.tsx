import { Text, Image, Box, Flex } from "@chakra-ui/react";
import HeadFoot from "@components/home/headfoot";

export default function About(): JSX.Element {
	return (
		<HeadFoot>
			<Flex
				height="100vh"
				width="100vw"
				align="center"
				justify="space-evenly"
			>
				<Box w="33%">
					<Text fontSize="3xl" mb="15px" align="left">
						Our Story
					</Text>
					<Text color="text.500" align="left">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptates, impedit doloremque eius quasi odio molestias
						quod esse praesentium rem libero ipsa enim! Expedita
						corrupti, dolorum iste commodi explicabo excepturi nam.
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
					</Text>
				</Box>
				<Image
					src="/ai.jpg"
					alt="placeholder"
					height="300px"
					objectFit="cover"
				/>
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

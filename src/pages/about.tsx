import { Text, Flex, Button, Box, Image } from "@chakra-ui/react";

import HeadFoot from "@components/home/headfoot";

export default function About(): JSX.Element {
	return (
		<HeadFoot>
			<Flex
				justify="center"
				align="center"
				height="100vh"
				w="100vw"
				backgroundImage="/lu.jpg"
				filter="grayscale(100%)"
			>
				<Box width="40%">
					<Text align="left" fontSize="36px" mb={4} color="black">
						Our Story
					</Text>
					<Text align="left" maxW="40%" color="black">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Explicabo, aliquam est maiores reiciendis nostrum
						laborum earum. Maxime in deleniti consequuntur vitae
						explicabo aliquid assumenda minus temporibus nisi
						beatae. Ducimus, voluptatem!
					</Text>
				</Box>
			</Flex>
			<Flex justify="center" align="center" height="100vh" w="100vw">
				<Box width="40%">
					<Text align="left" fontSize="36px" mb={2}>
						Mission
					</Text>
					<Text align="left" maxW="40%">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Explicabo, aliquam est maiores reiciendis nostrum
						laborum earum. Maxime in deleniti consequuntur vitae
						explicabo aliquid assumenda minus temporibus nisi
						beatae. Ducimus, voluptatem!
					</Text>
				</Box>
				<Image
					src="/ai.jpg"
					alt="kawaii"
					height="300px"
					objectFit="cover"
				/>
			</Flex>{" "}
			<Flex justify="center" align="center" height="100vh" w="100vw">
				<Box width="40%">
					<Text align="left" fontSize="36px" mb={2}>
						Our Story
					</Text>
					<Text align="left" maxW="40%">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Explicabo, aliquam est maiores reiciendis nostrum
						laborum earum. Maxime in deleniti consequuntur vitae
						explicabo aliquid assumenda minus temporibus nisi
						beatae. Ducimus, voluptatem!
					</Text>
				</Box>
				<Image
					src="/ai.jpg"
					alt="kawaii"
					height="300px"
					objectFit="cover"
				/>
			</Flex>
		</HeadFoot>
	);
}

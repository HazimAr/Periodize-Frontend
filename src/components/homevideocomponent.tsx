import {
	Box,
	Flex,
	Text,
	Heading,
	Icon,
	AspectRatio
} from "@chakra-ui/react";
import { FcBusinesswoman } from "react-icons/fc";

export default function HomeVideoComponent(): JSX.Element {
	return (
		<Flex justify="center" px="40px" bg="rgb(35,18,72,1)">
			<Flex
				flex={1}
				flexDir="column"
				//bg="blue.400"
				pb="20px"
				px="30px"
				textAlign="left"
			>
				<Heading size="2xl" py="20px">
					Test heading! Test heading!
				</Heading>
				<Text py="20px" color="gray.400">
					At volutpat diam ut venenatis tellus. Sit amet consectetur
					adipiscing elit duis. Quis hendrerit dolor magna eget est.
					Amet est placerat in egestas erat imperdiet sed euismod. At
					volutpat diam ut venenatis tellus. Sit amet consectetur
					adipiscing elit duis. Quis hendrerit dolor magna eget est.
					Amet est placerat in egestas erat imperdiet sed euismod.
				</Text>
				<Box
					bg="rgba(256,256,256,1)"
					py="30px"
					px="30px"
					color="rgba(0,0,0,1)"
					borderRadius="10px"
				>
					<Flex flexDir="row" align="center">
						<Icon as={FcBusinesswoman} boxSize="30px" />
						<Heading size="sm" mx="5px">
							User First Name Last Name
						</Heading>
					</Flex>
					<Box py="10px">
						<Text>
							“ Quote lol. At volutpat diam ut venenatis tellus.
							Sit amet consectetur adipiscing elit duis. Quis
							hendrerit dolor magna eget est. Amet est placerat in
							egestas erat imperdiet sed euismod. ”
						</Text>
					</Box>
				</Box>
			</Flex>

			<Flex
				flex={2}
				flexDir="column"
				justify="center"
				align="center"
				//bg="red.400"
				py="20px"
				px="30px"
			>
				<Box w="100%" align="center">
					<AspectRatio w="90%" ratio={5 / 3}>
						<iframe
							title="videoSample"
							src="https://www.youtube.com/embed/GInovXm59Ew?list=PL9FUXHTBubp-_e0wyNu1jfVVJ2QVAi5NW"
							allowFullScreen
						/>
					</AspectRatio>
				</Box>
				<Flex flexDir="row" my="20px" textAlign="left">
					<Box flex={1} mx="10px">
						<Heading size="sm" my="10px">
							Sample heading sample
						</Heading>
						<Text color="gray.400">
							At volutpat diam ut venenatis tellus. Sit amet
							consectetur adipiscing elit duis. Quis hendrerit
							dolor magna eget est. Amet est placerat in egestas
							erat imperdiet sed euismod.
						</Text>
					</Box>
					<Box flex={1} mx="10px">
						<Heading size="sm" my="10px">
							Sample heading sample
						</Heading>
						<Text color="gray.400">
							At volutpat diam ut venenatis tellus. Sit amet
							consectetur adipiscing elit duis. Quis hendrerit
							dolor magna eget est. Amet est placerat in egestas
							erat imperdiet sed euismod.
						</Text>
					</Box>
					<Box flex={1} mx="10px" my="10px">
						<Heading size="sm">Sample heading sample</Heading>
						<Text color="gray.400">
							At volutpat diam ut venenatis tellus. Sit amet
							consectetur adipiscing elit duis. Quis hendrerit
							dolor magna eget est. Amet est placerat in egestas
							erat imperdiet sed euismod.
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
}
import { Flex, Box, Text } from "@chakra-ui/react";

export default function BlogSection({ arr }: any): JSX.Element {
	return (
		<Flex justify="center" h="100vh" w="100vw" align="center">
			<Box w="500px">
				{arr.map((sect: any) => (
					<Box bg="black" mb="10px" p="10px 20px" key={sect.header}>
						<Flex color="#cd53f1ec">{sect.header}</Flex>
						<Flex>{sect.para}</Flex>
					</Box>
				))}
			</Box>
		</Flex>
	);
}

import { Flex, Box, Text } from "@chakra-ui/react";

export default function BlogSection({ arr }: any): JSX.Element {
	
	return (
		<Flex
			justify="center"
			h="100vh"
			w="100vw"
			justifyContent="center"
			align="center"
		>
			<Box w="500px">
				{arr.map((sect:any) => (
					<Box bg="black" mb="10px" p="10px 20px" key={sect.header}>
						<Flex
							color="#cd53f1ec"
							display="flex"
							justify="space-between"
							align="center"
							cursor="pointer"
						>
							<Text>{sect.header}</Text>
						</Flex>
						<Flex>{sect.para}</Flex>
					</Box>
				))}
			</Box>
		</Flex>
	);
}

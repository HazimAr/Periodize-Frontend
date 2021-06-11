import { Flex, Box, Text } from "@chakra-ui/react";

export default function FAQPage({ arr }: any): JSX.Element {
	
	return (
		<Flex
			justify="center"
			h="100vh"
			w="100vw"
			justifyContent="center"
			align="center"
		>
			<Box w="500px">
				{arr.map((faq, i) => (
					<Box bg="black" mb="10px" p="10px 20px" key={faq.question}>
						<Flex
							color="#cd53f1ec"
							display="flex"
							justify="space-between"
							align="center"
							cursor="pointer"
						>
							<Text>{faq.question}</Text>
						</Flex>
						<Flex>{faq.answer}</Flex>
					</Box>
				))}
			</Box>
		</Flex>
	);
}

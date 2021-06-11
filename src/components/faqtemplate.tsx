import { Flex, Box, Text } from "@chakra-ui/react";

export default function FAQPage(): JSX.Element {

const faqs = [
	{
		question: "What is the meaning of life?",
		answer: "There is no meaning.",
	},
	{
		question: "What does WUBALUBADUBDUB mean?",
		answer: "I am in great pain.",
	},
	{
		question: "What is the meaning of life?",
		answer: "That is that there is no meaning.",
	},
	{
		question: "What do we do with loli lovers?",
		answer: "FBI OPEN UP.",
	},
];

	return (
		<Flex
			display="flex"
			justify="center"
			h="100vh"
			w="100vw"
			justifyContent="center"
			align="center"
		>
			<Box w="500px">
				{faqs.map((faq, i) => (
					<Box bg="black" mb="10px" p="10px 20px">
						<Flex
							color="#cd53f1ec"
							display="flex"
							justify="space-between"
							align="center"
							cursor="pointer"
							onClick={() => toggle(i)}
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



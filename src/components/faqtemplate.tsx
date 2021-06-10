import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function FAQPage(): JSX.Element {
	const [faqs, setFaqs] = useState([
		{
			question: "What is the meaning of life?",
			answer: "There is no meaning.",
			open: true,
		},
		{
			question: "What does WUBALUBADUBDUB mean?",
			answer: "I am in great pain.",
			open: false,
		},
		{
			question: "What is the meaning of life?",
			answer: "That is that there is no meaning.",
			open: false,
		},
		{
			question: "What do we do with loli lovers?",
			answer: "FBI OPEN UP.",
			open: false,
		},
	]);

	return (
		<Flex justify="center" h="100vh" w="100vw" justifyContent="center" align="center">
			<Box w="500px">
				{faqs.map((faq, i) => (
					<Box bg="black" mBottom="10px" p="10px 20px">
						<Box color="#5b00ee879">{faq.question}</Box>
						<Box color="white">{faq.answer}</Box>
					</Box>
				))}
			</Box>
		</Flex>
	);
}

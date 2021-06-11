import { Heading, Box } from "@chakra-ui/react";
import FAQPage from "@components/faqtemplate";

export default function FAQ(): JSX.Element {
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
			question: "What is the meaning of life2222?",
			answer: "That is that there is no meaning.",
		},
		{
			question: "What do we do with loli lovers?",
			answer: "FBI OPEN UP.",
		},
	];
	return (
		<Box>
			<Heading>FAQs</Heading>
			<FAQPage arr={faqs} />
		</Box>
	);
}

import { Heading, Box } from "@chakra-ui/react";
import BlogSection from "@components/blogsection";

export default function FAQ(): JSX.Element {
	const faqs = [
		{
			header: "What is the meaning of life?",
			para: "There is no meaning.",
		},
		{
			header: "What does WUBALUBADUBDUB mean?",
			para: "I am in great pain.",
		},
		{
			header: "What is the meaning of life2222?",
			para: "That is that there is no meaning.",
		},
		{
			header: "What do we do with loli lovers?",
			para: "FBI OPEN UP.",
		},
	];
	return (
		<Box>
			<Heading>FAQs</Heading>
			<BlogSection arr={faqs} />
		</Box>
	);
}

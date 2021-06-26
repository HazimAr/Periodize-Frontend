import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import BlogSection from "@components/blogsection";
import HeadFoot from "@components/home/headfoot";

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
			header: "What is the meaning of life?",
			para: "That is that there is no meaning.",
		},
	];
	return (
		<HeadFoot>
			<Container>
				<Flex flexDir="column" maxW="100vw">
					{/* <Flex
					align="center"
					bgColor="#eef1f8"
					bgSize="25%"
					height="175px"
					bgImg="/faqbanner.jpg"
					bgPos="80% 15%"
					bgRepeat="no-repeat"
					w="100vw"
				>
					<Image height="175px" src="/personal-trainers.jpg" />
				</Flex> */}
					<Heading color="#8886f8" fontSize="20px">
						Frequently Asked Questions (FAQ)
					</Heading>

					<Flex mt="40px" mb="60px">
						<Box mt="70px" mr="20px">
							General
						</Box>
						<BlogSection arr={faqs} />
					</Flex>

					{/* <Flex position="sticky" top="0" flexDir="row-reverse">
					<GlassBgFlex
						flexDir="column"
						borderRadius="10px"
						p="10px"
						bg="linear-gradient(to bottom right, #8b07f77a, #7cadc4cc)"
					>
						
					</GlassBgFlex>
				</Flex> */}
				</Flex>
			</Container>
		</HeadFoot>
	);
}

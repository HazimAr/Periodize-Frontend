// const Footer = styled.footer``;
// // eslint-disable-next-line import/no-default-export
// export default function Foot(): JSX.Element {
// 	return <Footer />;
// }
// import styled from "styled-components";

import {
	Box,
	Divider,
	Flex,
	Heading,
	ListItem,
	UnorderedList,
} from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import Cont from "@components/container";
const companyLinks = [
	{
		title: "About",
		link: "/about",
	},
	{
		title: "FAQ",
		link: "/faq",
	},
];

const usefulLinks = [
	{
		title: "Support",
		link: "/support",
	},
	{
		title: "Contact us",
		link: "/const",
	},
];

export default function Foot(): JSX.Element {
	return (
		<Flex
			maxWidth="1200px"
			justify="space-around"
			margin="auto"
			// align="space-between"
			flexDir={{ base: "column", md: "row" }}
			height="40vh"
		>
			<Flex
				// justify="space-between"
				flexDir={{ base: "column", md: "row" }}
				ml={{ base: "30px", sm: "40px", md: "60px" }}
				w="100%"
			>
				<Flex w="30%" my={{ base: "20px", md: "0px" }}>
					<Heading size="lg">Periodize </Heading>
				</Flex>
				<Flex w="60%" flexDir={{ base: "column", md: "row" }}>
					<Box
						// w="40%"
						my={{ base: "20px", md: "0px" }}
						mx={{ base: "0px", md: "60px" }}
					>
						<UnorderedList
							styleType="none"
							textAlign="left"
							ml="0px"
						>
							<ListItem>
								<Heading size="sm">Company</Heading>
							</ListItem>
							{companyLinks.map((cl) => {
								return (
									<ListItem key={cl.title} my="16px">
										<Link href={cl.link}>
											<a>
												<Text size="md">
													{cl.title}
												</Text>
											</a>
										</Link>
									</ListItem>
								);
							})}
						</UnorderedList>
					</Box>
					<Box
						w={{ base: "100px", sm: "200px", md: "350px" }}
						px={{ base: "0px", md: "60px" }}
						my={{ base: "20px", md: "0px" }}
					>
						<UnorderedList
							styleType="none"
							textAlign="left"
							ml="0px"
						>
							<Heading size="sm">Useful Links</Heading>
							{usefulLinks.map((ufl) => {
								return (
									<ListItem key={ufl.title} my="16px">
										<Link href={ufl.link}>
											<a>
												<Text size="md">
													{ufl.title}
												</Text>
											</a>
										</Link>
									</ListItem>
								);
							})}
						</UnorderedList>
					</Box>
				</Flex>
			</Flex>
			<Flex
				// w="50%"
				justify={{ base: "", md: "center" }}
				pl={{ base: "0px", md: "30px" }}
				my={{ base: "20px", md: "0px" }}
				mr={{ base: "0px", sm: "0px", md: "60px" }}
				ml={{ base: "30px", sm: "40px", md: "0px" }}
			>
				<Text>Twitter</Text>
				<Text>Reddit</Text>
			</Flex>
		</Flex>
	);
}

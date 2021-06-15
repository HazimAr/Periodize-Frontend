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
		<Box bg="snow" h="30vh">
			<Flex bg="#633800" textAlign="left" h="80%">
				<Flex bg="#D76300" w="30%">
					<Text fontSize="xl" align="left">
						Periodize
					</Text>
				</Flex>
				<Flex bg="#FFDE58" justify="space-between" w="500px">
					<Box bg="#FFE7B5" w="100vw">
						<UnorderedList styleType="none">
							<ListItem> Company </ListItem>
							{companyLinks.map((cl) => {
								return (
									<ListItem key={cl.title}>
										<Link href={cl.link}>
											<a>
												<Heading ml="20px" size="md">
													{cl.title}
												</Heading>
											</a>
										</Link>
									</ListItem>
								);
							})}
						</UnorderedList>
					</Box>
					<Box bg=" #555555" w="100vw">
						<UnorderedList styleType="none">
							<ListItem> Useful Links </ListItem>
							{usefulLinks.map((ufl) => {
								return (
									<ListItem key={ufl.title}>
										<Link href={ufl.link}>
											<a>
												<Heading ml="20px" size="md">
													{ufl.title}
												</Heading>
											</a>
										</Link>
									</ListItem>
								);
							})}
						</UnorderedList>
					</Box>
				</Flex>
				<Flex bg=" #000000" flexDirection="row-reverse" ml="auto">
					<Text fontSize="md"> [Social media icons here] </Text>
				</Flex>
			</Flex>
			<Divider />
			<Flex bg="#D00070" justify="space-between" h="20%">
				<Flex bg="#8C4799">
					<Text>[Placeholder link]]</Text>
				</Flex>
				<Flex bg="#0032A0" flexDirection="row-reverse">
					© 2021 Periodize{" "}
				</Flex>
			</Flex>
		</Box>
	);
}

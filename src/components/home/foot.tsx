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
import Container from "@components/container";
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
		<Flex
			maxWidth="1200px"
			justify="center"
			flexDir={{ base: "column", md: "row" }}
			height="40vh"
		>
			<Flex
				w="33%"
				my={{ base: "20px", md: "0px" }}
				ml={{ base: "20px", md: "0px" }}
			>
				Spotify
			</Flex>
			<Flex
				w="40vw"
				flexDir={{ base: "column", md: "row" }}
				ml={{ base: "20px", md: "0px" }}
			>
				<Box
					w="100%"
					mx={{ base: "0px", md: "20px" }}
					my={{ base: "20px", md: "0px" }}
				>
					<UnorderedList styleType="none" textAlign="left" ml="0px">
						<ListItem> Company </ListItem>
						{companyLinks.map((cl) => {
							return (
								<ListItem key={cl.title} my="8px">
									<Link href={cl.link}>
										<a>
											<Heading size="md">
												{cl.title}
											</Heading>
										</a>
									</Link>
								</ListItem>
							);
						})}
					</UnorderedList>
				</Box>
				<Box
					w="100%"
					mx={{ base: "0px", md: "20px" }}
					my={{ base: "20px", md: "0px" }}
				>
					<UnorderedList styleType="none" textAlign="left" ml="0px">
						<ListItem> Useful Links </ListItem>
						{usefulLinks.map((ufl) => {
							return (
								<ListItem key={ufl.title}>
									<Link href={ufl.link}>
										<a>
											<Heading size="md" my="8px">
												{ufl.title}
											</Heading>
										</a>
									</Link>
								</ListItem>
							);
						})}
					</UnorderedList>
				</Box>
				<Flex
					w="100%"
					pl={{ base: "0px", md: "100px" }}
					my={{ base: "20px", md: "0px" }}
					// ml={{ base: "20px", md: "0px" }}
				>
					<Text>Twitter</Text>
					<Text>Reddit</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}

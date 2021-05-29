import Head from "@components/home/head";
import Foot from "@components/home/foot";
import Container from "@components/container";
import {
	Heading,
	Stack,
	VStack,
	Text,
	useClipboard,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Input,
	Box,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Home(): JSX.Element {
	const [value, setValue] = useState("mail@periodize.org");
	const { hasCopied, onCopy } = useClipboard(value);
	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	return (
		<>
			<Head />
			<Container>
				<Heading as="h2" size="2xl" mb={4}>
					Contact Us
				</Heading>
				<Flex
					flexDir="column"
					align="flex-start"
					width="90%"
					margin="auto"
				>
					<Flex flexDir={{ base: "column", lg: "row" }}>
						<Flex flexDir="column" align="flex-start">
							<Heading as="h2" size="l" pt={2} color="white">
								Email us:
							</Heading>
							<Text
								mb={4}
								onClick={onCopy}
								bgGradient="linear(to-r,#42CAF7, white)"
								bgClip="text"
								fontWeight="extrabold"
								pt={2}
							>
								mail@periodize.org
							</Text>
						</Flex>
						<Text
							maxW={{ base: "90%", lg: "50%" }}
							textAlign="left"
							color="white"
							lineHeight="tall"
							fontSize=""
						>
							The team is open for your ideas, questions and
							needs. Our clients get the superior results when a
							short-term acquaintance turns into a long-term
							collaboration.
						</Text>
					</Flex>

					<Text
						maxW={{ base: "90%", lg: "50%" }}
						textAlign="left"
						color="white"
						letterSpacing="widest"
						margin="auto"
						mt="50px"
						mb={2}
					>
						Hit us up
					</Text>
					<Box w="95%" margin="auto">
						<form>
							<FormControl mb={2}>
								<Input
									type="name"
									name="fullname"
									id="fullname"
									placeholder="fullname"
									aria-label="fullname"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
									required
									// color={
									// 	colorMode === "dark"
									// 		? "secondary"
									// 		: "primary"
									// }
								/>
							</FormControl>
							<FormControl mb={2}>
								<Input
									name="company"
									id="company"
									placeholder="company"
									aria-label="company"
									value={company}
									onChange={(e) => {
										setCompany(e.target.value);
									}}
									required
									// color={
									// 	colorMode === "dark"
									// 		? "secondary"
									// 		: "primary"
									// }
								/>
							</FormControl>
							<FormControl mb={2}>
								<Input
									type="email"
									name="email"
									id="email"
									placeholder="email"
									aria-label="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									required
									// color={
									// 	colorMode === "dark"
									// 		? "secondary"
									// 		: "primary"
									// }
								/>
							</FormControl>

							<Text color="white" letterSpacing="widest" mb={2}>
								Message
							</Text>
							<Textarea
								name="message"
								id="message"
								placeholder="hey"
								aria-label="message"
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}
							/>
							<Button type="submit" variant="outline" my={2}>
								Submit
							</Button>
						</form>
					</Box>
				</Flex>
				<Text mt={2}>With Love from Team Periodize </Text>
			</Container>
			<Foot />
		</>
	);
}

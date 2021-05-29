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
import StyledButton from "@components/styledbutton";
import Emoji from "@components/emoji";
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
				<Heading as="h2" size="3xl" mb={[8, 10]} color="white">
					Contact Us
				</Heading>
				<Flex
					flexDir="column"
					align="flex-start"
					// width={{ base: "90%", sm: "80%" }}
				>
					<Flex
						flexDir={{ base: "column", sm: "row" }}
						align="flex-start"
						justify={{ base: "", sm: "space-between" }}
						width={{ base: "90%", sm: "70%" }}
						margin="auto"
					>
						<Flex
							flexDir="column"
							align={{ base: "flex-start", sm: "space-between" }}
							mr={{ base: "", sm: "20px" }}
						>
							<Heading as="h2" size="l" pt={2} color="white">
								Email us:
							</Heading>
							<Text
								mb={6}
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
							maxW={{ base: "90%", sm: "50%" }}
							textAlign="left"
							color="white"
							lineHeight={["tall", "small"]}
							size="sm"
							fontSize={["large", "small"]}
						>
							The team is open for your ideas, questions and
							needs. Our clients get the superior results when a
							short-term acquaintance turns into a long-term
							collaboration.
						</Text>
					</Flex>
					<Box margin="auto" width={{ base: "90%", sm: "70%" }}>
						<Text
							maxW={{ base: "90%", md: "50%" }}
							textAlign="left"
							color="white"
							letterSpacing="widest"
							// margin="auto"
							mt="50px"
							mb={2}
							pl={{ base: "0px", sm: "2px" }}
						>
							Hit us up
						</Text>

						<form>
							<FormControl mb={4}>
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
							<FormControl mb={4}>
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
							<FormControl mb={4}>
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

							<Text
								color="white"
								letterSpacing="widest"
								mb={2}
								textAlign="left"
							>
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

							<StyledButton type="submit" my={4}>
								Submit
							</StyledButton>
						</form>
					</Box>
				</Flex>
				<Text mt={2}>
					With Love from
					<Text
						as="span"
						color="primary"
						bgGradient="linear(to-r,#42CAF7, white)"
						bgClip="text"
						ml={1}
					>
						Team Periodize
					</Text>
					<Emoji symbol="💪" label="flex" />
					<Emoji symbol="💖" label="heart" />
				</Text>
			</Container>
			<Foot />
		</>
	);
}

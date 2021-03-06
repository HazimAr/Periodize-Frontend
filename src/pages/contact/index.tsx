/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { CopyIcon, EmailIcon } from "@chakra-ui/icons";
import {
	Box,
	chakra,
	Flex,
	FormControl,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	Textarea,
	Tooltip,
	useClipboard,
	useColorModeValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import Emoji from "@components/emoji";
import HeadFoot from "@components/home/headfoot";
import StyledButton from "@components/styledbutton";
import axios from "axios";
import { validate } from "email-validator";
import React, { useState } from "react";
import { FaBuilding, FaUserAlt } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaBuilding = chakra(FaBuilding);
export default function Home(): JSX.Element {
	const value = "mail@periodize.org";
	const { hasCopied, onCopy } = useClipboard(value);
	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const placeholderColor = useColorModeValue("black", "white");

	async function handleSubmit() {
		await axios.post("/api/contact", {
			name,
			email,
			subject,
			company,
			message,
		});
		window.location.href = "/contact/success";
	}

	return (
		<HeadFoot>
			<Container>
				<Heading as="h2" size="3xl" mb={[8, 10]}>
					Contact Us
				</Heading>
				<Flex
					flexDir="column"
					align="flex-start"
					width={{ base: "90%", sm: "50%" }}
				>
					<Flex
						flexDir={{ base: "column", sm: "row" }}
						align="flex-start"
						justify={{ base: "", sm: "space-between" }}
						margin="auto"
					>
						<Flex
							flexDir="column"
							align={{ base: "flex-start", sm: "space-between" }}
							mr={{ base: "", sm: "20px" }}
							m="0"
						>
							<Heading as="h2" size="md" pt={2}>
								Email us:
							</Heading>
							<Flex wrap="nowrap">
								<Text
									mb={6}
									variant="bnw"
									fontWeight="extrabold"
									pt={2}
								>
									mail@periodize.org
								</Text>
								<Tooltip
									label="Copied!"
									aria-label="A tooltip"
									placement="top"
									hasArrow
									isOpen={hasCopied}
								>
									<IconButton
										aria-label="copy"
										icon={<CopyIcon />}
										variant="ghost"
										_focus={{ outline: "none" }}
										_hover={{
											bg: "transparent",
											color: "secondary",
										}}
										onClick={onCopy}
										bg="transparent"
									/>
								</Tooltip>
							</Flex>
						</Flex>
						<Text
							maxW={{ base: "90%", sm: "50%" }}
							textAlign="left"
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
					<Flex
						flexDir="column"
						w="100%"
						align="center"
						justify="center"
					>
						<Text
							maxW={{ base: "90%", md: "50%" }}
							textAlign="left"
							letterSpacing="widest"
							variant="bnw"
							mt="40px"
							mb={2}
							pl={{ base: "0px", sm: "2px" }}
						>
							Hit us up
						</Text>

						<form style={{ width: "100%" }}>
							<FormControl mb={4}>
								<InputGroup>
									<InputLeftElement pointerEvents="none">
										<CFaUserAlt />
									</InputLeftElement>
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
										_placeholder={{
											color: placeholderColor,
										}}
										border="1px"
										borderColor="gray.600"
									/>
								</InputGroup>
							</FormControl>
							{error ? <Box color="red.500">{error}</Box> : null}
							<FormControl mb={4}>
								<InputGroup>
									<InputLeftElement pointerEvents="none">
										<EmailIcon />
									</InputLeftElement>
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
										_placeholder={{
											color: placeholderColor,
										}}
										border="1px"
										borderColor="gray.600"
									/>
								</InputGroup>
							</FormControl>
							<FormControl mb={4}>
								<InputGroup>
									<InputLeftElement pointerEvents="none">
										<CFaBuilding />
									</InputLeftElement>
									<Input
										name="company"
										id="company"
										placeholder="company"
										aria-label="company"
										value={company}
										onChange={(e) => {
											setCompany(e.target.value);
										}}
										_placeholder={{
											color: placeholderColor,
										}}
										border="1px"
										borderColor="gray.600"
									/>
								</InputGroup>
							</FormControl>
							<FormControl mb={4}>
								<Text
									letterSpacing="widest"
									mb={2}
									textAlign="left"
								>
									Subject
								</Text>
								<Input
									name="subject"
									id="subject"
									placeholder=""
									aria-label="subject"
									value={subject}
									onChange={(e) => {
										setSubject(e.target.value);
									}}
									_placeholder={{
										color: placeholderColor,
									}}
									border="1px"
									borderColor="gray.600"
								/>
							</FormControl>
							<Text
								letterSpacing="widest"
								mb={2}
								textAlign="left"
								variant="bnw"
							>
								Message
							</Text>
							<Textarea
								name="message"
								id="message"
								placeholder=""
								aria-label="message"
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}
								border="1px"
								borderColor="gray.600"
								_placeholder={{
									color: placeholderColor,
								}}
							/>

							<StyledButton
								type="submit"
								my={4}
								onClick={(e: {
									preventDefault: () => void;
									target: { value: string };
								}) => {
									e.preventDefault();
									validate(email)
										? handleSubmit()
										: setError(
												"That Email address is not valid"
										  );
								}}
							>
								Submit
							</StyledButton>
						</form>
					</Flex>
				</Flex>
				<Text mt={2} variant="bnw">
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
					<Emoji symbol="????" label="flex" />
					<Emoji symbol="????" label="heart" />
				</Text>
			</Container>
		</HeadFoot>
	);
}

export { getServerSideProps } from "@styles/chakra";

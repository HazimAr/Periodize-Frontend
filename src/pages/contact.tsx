import Head from "@components/home/head";
import Foot from "@components/home/foot";
import Container from "@components/container";
import {
	Heading,

	useClipboard,
	Flex,
	FormControl,

	Input,

	Textarea,
	IconButton,
	Tooltip,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import React, {  useState } from "react";
import StyledButton from "@components/styledbutton";
import Emoji from "@components/emoji";
import { CopyIcon } from "@chakra-ui/icons";
import Bwtest from "@components/bwtext";
export default function Home(): JSX.Element {
	const { colorMode } = useColorMode();
	const value = "mail@periodize.org";
	const { hasCopied, onCopy } = useClipboard(value);
	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const placeholderColor = useColorModeValue("black", "white");
	// const primaryColor = useColorModeValue("primary", "white");
	return (
		<>
			<Head />
			<Container>
				<Heading
					as="h2"
					size="3xl"
					mb={[8, 10]}
					color={colorMode == "dark" ? "white" : "black"}
				>
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
							<Heading
								as="h2"
								size="md"
								pt={2}
								color={colorMode == "dark" ? "white" : "black"}
							>
								Email us:
							</Heading>
							<Flex wrap="nowrap">
								<Bwtest
									mb={6}
									bgGradient={
										colorMode == "dark"
											? "linear(to-r,#42CAF7, white)"
											: "linear(to-r ,primary, black)"
									}
									bgClip="text"
									fontWeight="extrabold"
									pt={2}
								>
									mail@periodize.org
								</Bwtest>
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
										color="primary"
										variant="ghost"
										_focus={{ outline: "none" }}
										_hover={{
											bg: "transparent",
											color: "secondary",
										}}
										onClick={onCopy}
										bg="transparent"
										// p="0px"
										// margin={0}
									/>
								</Tooltip>
							</Flex>
						</Flex>
						<Bwtest
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
						</Bwtest>
					</Flex>
					<Flex
						flexDir="column"
						w="100%"
						align="center"
						justify="center"
					>
						<Bwtest
							maxW={{ base: "90%", md: "50%" }}
							textAlign="left"
							letterSpacing="widest"
							// margin="auto"
							mt="40px"
							mb={2}
							pl={{ base: "0px", sm: "2px" }}
						>
							Hit us up
						</Bwtest>

						<form style={{ width: "100%" }}>
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
									_placeholder={{
										color: placeholderColor,
									}}
									border="1px"
									borderColor="primary"
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
									_placeholder={{
										color: placeholderColor,
									}}
									border="1px"
									borderColor="primary"
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
									_placeholder={{
										color: placeholderColor,
									}}
									border="1px"
									borderColor="primary"
									// color={
									// 	colorMode === "dark"
									// 		? "secondary"
									// 		: "primary"
									// }
								/>
							</FormControl>

							<Bwtest
								letterSpacing="widest"
								mb={2}
								textAlign="left"
							>
								Message
							</Bwtest>
							<Textarea
								name="message"
								id="message"
								placeholder="hey"
								aria-label="message"
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}
								border="1px"
								borderColor="primary"
								_placeholder={{
									color: placeholderColor,
								}}
							/>

							<StyledButton
								type="submit"
								my={4}
								border="2px"
								borderColor="primary"
							>
								Submit
							</StyledButton>
						</form>
					</Flex>
				</Flex>
				<Bwtest mt={2}>
					With Love from
					<Bwtest
						as="span"
						color="primary"
						bgGradient="linear(to-r,#42CAF7, white)"
						bgClip="text"
						ml={1}
					>
						Team Periodize
					</Bwtest>
					<Emoji symbol="💪" label="flex" />
					<Emoji symbol="💖" label="heart" />
				</Bwtest>
			</Container>
			<Foot />
		</>
	);
}

export { getServerSideProps } from "@styles/chakra";

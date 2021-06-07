/* eslint-disable promise/no-nesting */
/* eslint-disable no-console */
/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { createUser } from "@api/auth";
// import { Filter } from "bad-words";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	Text,
	Stack,
	Flex,
	Box,
	FormControl,
	InputGroup,
	InputLeftElement,
	Input,
	InputRightElement,
	chakra,
	IconButton,

} from "@chakra-ui/react";
import GoogleButton from "@components/google";
import HeadFoot from "@components/home/headfoot";
import Link from "@components/link";
import Button from "@components/styledbutton";
import { StyledFlex } from "@styles/index.theme";
import axios from "axios";
import { validate } from "email-validator";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function LoginPage(): JSX.Element {

	const Filter = require("bad-words");
	const filter = new Filter();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isSubmitting, setSubmitting] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handleShowClick = () => {
		setShowPassword(!showPassword);
	};

	return (
		<HeadFoot>
			<Flex
				flexDirection="column"
				width="100wh"
				justifyContent="center"
				alignItems="center"
			>
				<Stack
					flexDir="column"
					mb="2"
					justifyContent="center"
					alignItems="center"
				>
					<Text
						bgGradient="text.200"
						fontSize="6xl"
						fontWeight="extrabold"
					>
						Register
					</Text>
					<Box minW={{ base: "90%", md: "468px" }}>
						<form>
							<Stack spacing={4} p="1rem" boxShadow="md">
								<FormControl>
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<CFaUserAlt color="primary" />
										</InputLeftElement>
										<Input
											type="username"
											name="username"
											id="username"
											placeholder="Username"
											aria-label="username"
											value={username}
											onChange={(e) => {
												setUsername(e.target.value);
											}}
											required
										/>
									</InputGroup>
								</FormControl>
								<FormControl>
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
										/>
									</InputGroup>
								</FormControl>
								<FormControl>
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<CFaLock />
										</InputLeftElement>
										<Input
											type={
												showPassword
													? "text"
													: "password"
											}
											name="password"
											id="password"
											placeholder="Password"
											aria-label="password"
											value={password}
											onChange={(e) => {
												setPassword(e.target.value);
											}}
											required
										/>
										<InputRightElement width="4.5rem">
											<IconButton
												h="1.75rem"
												aria-label="show-password"
												size="sm"
												onClick={handleShowClick}
												bg="transparent"
												_focus={{ outline: "none" }}
												outline="none"
												m={0}
												_hover={{ bg: "transparent" }}
												icon={
													showPassword ? (
														<ViewOffIcon />
													) : (
														<ViewIcon />
													)
												}
											/>
										</InputRightElement>
									</InputGroup>
								</FormControl>
								{error ? (
									<Box color="red.500">{error}</Box>
								) : null}
								<Button
									width="full"
									isLoading={isSubmitting}
									onClick={(e: any) => {
										e.preventDefault();
										if (filter.isProfane(username)) {
											setError(
												"That username is not allowed"
											);
											return;
										}
										validate(email)
											? axios
													.post("/api/validate", {
														email,
													})
													.then((e: any) => {
														e.result ===
														"deliverable"
															? createUser(
																	email,
																	username,
																	password
															  ).then((e) => {
																	setSubmitting(
																		true
																	);
																	e.message ===
																	"success"
																		? console.log(
																				error
																		  )
																		: setError(
																				e.message
																		  );
															  })
															: setError(
																	"That is not a valid email address"
															  );
													})
											: setError(
													"That is not a valid email address"
											  );
									}}
								>
									Register
								</Button>
								<GoogleButton />
							</Stack>
						</form>
					</Box>
				</Stack>
				<StyledFlex flexDir="column">
					<Link href="/forgot" name="Forgot password?" />
					<Link href="/login" name="Already have an account?" />
					<Link href="/privacy" name="Privacy Policy" />
				</StyledFlex>
			</Flex>
		</HeadFoot>
	);
}

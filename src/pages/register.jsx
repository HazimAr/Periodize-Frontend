/* eslint-disable @typescript-eslint/no-floating-promises */
import { createUser, login } from "@api/auth";
import { verifyEmail } from "@api/profile";
import { useState } from "react";
import Link from "@components/link";
import { GoogleLogin } from "react-google-login";
import { CLIENT_ID } from "config";
import Head from "@components/home/head";
import Foot from "@components/home/foot";
import axios from "axios";
import * as EmailValidator from "email-validator";
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
	FormHelperText,
	chakra,
	Button,
	IconButton,
	useColorMode,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
// import { Filter } from "bad-words";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function LoginPage() {
	const { colorMode } = useColorMode();
	const Filter = require("bad-words"),
		filter = new Filter();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isSubmitting, setSubmitting] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handleShowClick = () => setShowPassword(!showPassword);

	return (
		<>
			<Head />
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
						bgGradient={
							colorMode === "dark"
								? "linear(to-r, #ffcdb2, #06d6a0)"
								: "linear(to-r,primary, darkPrimary)"
						}
						bgClip="text"
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
										<InputLeftElement
											pointerEvents="none"
											children={
												<CFaUserAlt color="primary" />
											}
										/>
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
										<InputLeftElement
											pointerEvents="none"
											children={
												<EmailIcon color="primary" />
											}
										/>
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
										<InputLeftElement
											pointerEvents="none"
											color="gray.300"
											children={
												<CFaLock color="primary" />
											}
										/>
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
									<FormHelperText textAlign="right">
										<Link
											href="/"
											name="forgot password?"
										/>
									</FormHelperText>
								</FormControl>
								{error ? (
									<Box color="red.400">{error}</Box>
								) : null}
								<Button
									borderRadius={2}
									type="submit"
									variant="solid"
									width="full"
									bg="primary"
									color="secondary"
									_hover={{ bg: "text.600" }}
									isLoading={isSubmitting}
									onClick={(e) => {
										e.preventDefault();
										if (filter.isProfane(username)) {
											setError(
												"That username is not allowed"
											);
											return;
										}
										EmailValidator.validate(email) == true
											? void axios
													.post("/api/validate", {
														email,
													})
													.then((e) => {
														e.result ==
														"deliverable"
															? createUser(
																	email,
																	username,
																	password
															  ).then((e) => {
																	setSubmitting(
																		true
																	);
																	e.message ==
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
								<GoogleLogin
									clientId={CLIENT_ID}
									buttonText="Login"
									onSuccess={(response) => {
										login(
											response.profileObj.name,
											response.profileObj.googleId
										).then((data) => {
											if (data.code == 404) {
												createUser(
													response.profileObj.email,
													response.profileObj.name,
													response.profileObj
														.googleId,
													response.profileObj.imageUrl
												).then((data) => {});
											}
											window.location.href = "/dashboard";
										});
									}}
									onFailure={(response) => {}}
									cookiePolicy="single_host_origin"
								>
									Sign in with Google
								</GoogleLogin>
							</Stack>
						</form>
					</Box>
				</Stack>
				<Box>
					<Link
						href="/login"
						name="Already have an account? Log in"
					/>
				</Box>
			</Flex>
			<Foot />
		</>
	);
}

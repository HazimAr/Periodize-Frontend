import { changePassword, forgotPassword } from "@api/profile";
import { getParameterByName } from "@lib/cookie";
import Link from "@components/link";
import { FaLock } from "react-icons/fa";
import { useEffect, useState } from "react";

import {
	Text,
	Stack,
	Flex,
	Box,
	FormControl,
	InputGroup,
	InputLeftElement,
	Input,
	Button,
	IconButton,
	InputRightElement,
	chakra,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import axios from "axios";
import Head from "@components/home/head";
import Foot from "@components/home/foot";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
const CFaLock = chakra(FaLock);
export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [fromEmail, setFromEmail] = useState(false);
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const handleShowClick = () => setShowPassword(!showPassword);
	useEffect(() => {
		const id = getParameterByName("id");

		if (id) {
			setId(id);
			setFromEmail(true);
		}
	}, [id]);
	function handleSubmit() {
		void axios.post("/api/email", {
			email,
		});
		window.location.href = "/forgot/email";
	}
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
					{fromEmail ? (
						<>
							<Text
								bgGradient="linear(to-r, #ffcdb2, #06d6a0)"
								bgClip="text"
								fontSize="4xl"
								fontWeight="extrabold"
							>
								Reset Password
							</Text>
							<Box minW={{ base: "90%", md: "468px" }}>
								<form>
									<Stack spacing={4} p="1rem" boxShadow="md">
										<FormControl>
											<InputGroup>
												<InputLeftElement
													pointerEvents="none"
													color="gray.300"
													children={
														<CFaLock color="gray.300" />
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
														setPassword(
															e.target.value
														);
													}}
													required
												/>
												<InputRightElement
													width="4.5rem"
													mr={0}
												>
													<IconButton
														aria-label="Show Password"
														h="1.75rem"
														size="sm"
														onClick={
															handleShowClick
														}
														bg="transparent"
														_focus={{
															outline: "none",
														}}
														outline="none"
														m={0}
														icon={
															showPassword ? (
																<ViewOffIcon />
															) : (
																<ViewIcon />
															)
														}
														_hover={{
															bg: "transparent",
														}}
													>
														{showPassword
															? "Hide"
															: "Show"}
													</IconButton>
												</InputRightElement>
											</InputGroup>
										</FormControl>
										{error ? (
											<Box color="red.400">{error}</Box>
										) : null}
										<Button
											borderRadius={2}
											type="submit"
											variant="solid"
											width="full"
											bg="text.800"
											_hover={{ bg: "text.600" }}
											onClick={(e) => {
												e.preventDefault();
												changePassword(
													password,
													id
												).then((e) => {
													e.message == "success"
														? console.log(e.message)
														: setError(e.message);
												});
											}}
										>
											Set New Password
										</Button>
									</Stack>
								</form>
							</Box>
						</>
					) : (
						<>
							<Text
								bgGradient="linear(to-r, #ffcdb2, #06d6a0)"
								bgClip="text"
								fontSize="4xl"
								fontWeight="extrabold"
							>
								Forgot Password?
							</Text>
							<Box minW={{ base: "90%", md: "468px" }}>
								<form>
									<Stack spacing={4} p="1rem" boxShadow="md">
										<FormControl>
											<InputGroup>
												<InputLeftElement
													pointerEvents="none"
													children={
														<EmailIcon color="gray.300" />
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
														setEmail(
															e.target.value
														);
													}}
													required
												/>
											</InputGroup>
										</FormControl>
										{error ? (
											<Box color="red.400">{error}</Box>
										) : null}
										<Button
											borderRadius={2}
											type="submit"
											variant="solid"
											width="full"
											bg="text.800"
											_hover={{ bg: "text.600" }}
											onClick={(e) => {
												e.preventDefault();
												forgotPassword(email).then(
													(e) => {
														e.message == "success"
															? handleSubmit()
															: setError(
																	e.message
															  );
													}
												);
											}}
										>
											Send Email
										</Button>
									</Stack>
								</form>
							</Box>
						</>
					)}
				</Stack>
				<Box>
					<Link href="/" name="New to us? Sign Up" />
				</Box>
			</Flex>
			<Foot />
		</>
	);
}

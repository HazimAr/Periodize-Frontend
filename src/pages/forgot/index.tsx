import { changePassword, forgotPassword } from "@api/profile";
import { getParameterByName } from "@lib/cookie";
import Link from "@components/link";
import { FaLock } from "react-icons/fa";
import { useEffect, useState } from "react";
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
	Button,
	IconButton,
	InputRightElement,
	chakra,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import axios from "axios";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import HeadFoot from "@components/home/headfoot";
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
					{fromEmail ? (
						<>
							<Text fontSize="4xl" fontWeight="extrabold">
								Reset Password
							</Text>
							<Box minW={{ base: "90%", md: "468px" }}>
								<form>
									<Stack spacing={4} p="1rem" boxShadow="md">
										<FormControl>
											<InputGroup>
												<InputLeftElement
													pointerEvents="none"
													children={<CFaLock />}
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
											<Box color="red.500">{error}</Box>
										) : null}
										<Button
											borderRadius={2}
											type="submit"
											variant="solid"
											width="full"
											_hover={{ bg: "text.600" }}
											onClick={(e) => {
												e.preventDefault();
												changePassword(
													password,
													id
												).then((e) => {
													e.message == "success"
														? (window.location.href =
																"/forgot/success")
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
							<Text fontSize="4xl" fontWeight="extrabold">
								Forgot Password?
							</Text>
							<Box minW={{ base: "90%", md: "468px" }}>
								<form>
									<Stack spacing={4} p="1rem" boxShadow="md">
										<FormControl>
											<InputGroup>
												<InputLeftElement
													pointerEvents="none"
													children={<EmailIcon />}
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
											<Box color="red.500">{error}</Box>
										) : null}
										<Button
											borderRadius={2}
											type="submit"
											variant="solid"
											width="full"
											// _hover={{ bg: "text.600" }}
											onClick={(e) => {
												e.preventDefault();
												EmailValidator.validate(
													email
												) == true
													? forgotPassword(
															email
													  ).then((e) => {
															e.message ==
															"success"
																? handleSubmit()
																: setError(
																		e.message
																  );
													  })
													: setError(
															"That is not a valid email address"
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
					<Link href="/register" name="New to us? Sign Up" />
				</Box>
			</Flex>
		</HeadFoot>
	);
}

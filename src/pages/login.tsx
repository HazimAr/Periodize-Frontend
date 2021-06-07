/* eslint-disable @typescript-eslint/no-explicit-any */
import { login } from "@api/auth";
import Link from "@components/link";
import { FaLock } from "react-icons/fa";
import GoogleButton from "@components/google";
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
	IconButton,
	InputRightElement,
	FormHelperText,
	chakra,

} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon, EmailIcon } from "@chakra-ui/icons";
import Button from "@components/styledbutton";
import { StyledFlex } from "@styles/index.theme";
import useProfile from "@hooks/useProfile";
import { validate } from "email-validator";
import HeadFoot from "@components/home/headfoot";

const CFaLock = chakra(FaLock);

export default function LoginPage(): JSX.Element {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const handleShowClick = () => setShowPassword(!showPassword);

	const user: any = useProfile();

	useEffect(() => {
		if (user) {
			window.location.href = "/dashboard";
		}
	}, [user]);

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
					<Text fontSize="6xl" fontWeight="extrabold">
						Login
					</Text>
					<Box minW={{ base: "90%", md: "468px" }}>
						<form>
							<Stack spacing={4} p="1rem" boxShadow="md">
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
												setPassword(e.target.value);
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
												onClick={handleShowClick}
												bg="transparent"
												_focus={{ outline: "none" }}
												outline="none"
												m={0}
												icon={
													showPassword ? (
														<ViewOffIcon />
													) : (
														<ViewIcon />
													)
												}
												_hover={{ bg: "transparent" }}
											>
												{showPassword ? "Hide" : "Show"}
											</IconButton>
										</InputRightElement>
									</InputGroup>
									<FormHelperText textAlign="right">
										<Link
											href="/forgot"
											name="forgot password?"
										/>
									</FormHelperText>
								</FormControl>
								{error ? (
									<Box color="red.500">{error}</Box>
								) : null}
								<Button
									width="full"
									onClick={(e: any) => {
										e.preventDefault();
										void validate(email)
											? login(email, password).then(
													(e) => {
														e.message == "success"
															? console.log(error)
															: setError(
																	e.message
															  );
													}
											  )
											: setError(
													"That email is not valid"
											  );
									}}
								>
									Login
								</Button>
								<GoogleButton />
							</Stack>
						</form>
					</Box>
				</Stack>
				<StyledFlex flexDir="column">
					<Link href="/forgot" name="Forgot password?" />
					<Link href="/register" name="Don't have an account?" />
					<Link href="/privacy" name="Privacy Policy" />
				</StyledFlex>
			</Flex>
		</HeadFoot>
	);
}

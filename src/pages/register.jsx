/* eslint-disable @typescript-eslint/no-floating-promises */
import { createUser, login } from "@api/auth";
import { useState } from "react";
import Link from "@components/Link";
import { GoogleLogin } from "react-google-login";
import { CLIENT_ID } from "config";
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
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { EmailIcon } from "@chakra-ui/icons";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isSubmitting, setSubmitting] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handleShowClick = () => setShowPassword(!showPassword);

	return (
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
					bgGradient="linear(to-r, #ffcdb2, #06d6a0)"
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
											<CFaUserAlt color="gray.300" />
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
										children={<CFaLock color="gray.300" />}
									/>
									<Input
										type={
											showPassword ? "text" : "password"
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
										<Button
											h="1.75rem"
											size="sm"
											onClick={handleShowClick}
											bg="text.800"
											_hover={{ bg: "text.600" }}
										>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
								<FormHelperText textAlign="right">
									<Link href="/" name="forgot password?" />
								</FormHelperText>
							</FormControl>
							<Box color="red.400">{error}</Box>
							<Button
								borderRadius={2}
								type="submit"
								variant="solid"
								width="full"
								bg="text.800"
								_hover={{ bg: "text.600" }}
								isLoading={isSubmitting}
								onClick={(e) => {
									e.preventDefault();
									createUser(email, username, password).then(
										(e) => {
											setSubmitting(true);
											e.message == "success"
												? console.log(error)
												: setError(e.message);
										}
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
										response.profileObj.googleId,
										response.profileObj.email
									).then((data) => {
										console.log(data);
										window.location.href = "/dashboard";
									});
									console.log(response);
								}}
								onFailure={(response) => {
									console.log(response);
								}}
								cookiePolicy="single_host_origin"
							>
								Sign in with Google
							</GoogleLogin>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				<Link href="/login" name="Already have an account? Log in" />
			</Box>
		</Flex>
	);
}

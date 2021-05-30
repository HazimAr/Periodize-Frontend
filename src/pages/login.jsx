import { createUser, login } from "@api/auth";
import { getProfileData } from "@api/profile";
import { getCookie } from "@lib/cookie";
import Link from "@components/link";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { CLIENT_ID } from "config";
import { useEffect, useState } from "react";
import Head from "@components/home/head";
import Foot from "@components/home/foot";
import { GoogleLogin } from "react-google-login";
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
	Button,
	useColorMode,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon } from "@chakra-ui/icons";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function LoginPage() {
	const { colorMode } = useColorMode();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const handleShowClick = () => setShowPassword(!showPassword);

	useEffect(() => {
		const sess = getCookie("sessionid");
		if (sess) {
			getProfileData().then((data) => {
				if (data.code == 200) {
					window.location.href = "/dashboard";
				}
			});
		}
	}, []);

	function changeError(err) {
		setError(err);
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
											color={
												colorMode === "dark"
													? "secondary"
													: "primary"
											}
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
												color="primary"
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
										login(email, password).then((e) => {
											e.message == "success"
												? console.log(error)
												: changeError(e.message);
										});
									}}
								>
									Login
								</Button>
								<GoogleLogin
									clientId={CLIENT_ID}
									buttonText="Login"
									onSuccess={(response) => {
										login(
											response.profileObj.name,
											response.profileObj.googleId
										).then(async (data) => {
											// Check if user is not found then will create one if not found
											if (data.code == 404) {
												await createUser(
													response.profileObj.email,
													response.profileObj.name,
													response.profileObj
														.googleId,
													response.profileObj.imageUrl
												);
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
					<Link href="/" name="New to us? Sign Up" />
				</Box>
			</Flex>
			<Foot />
		</>
	);
}

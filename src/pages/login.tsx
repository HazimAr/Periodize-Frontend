import { login } from "@api/auth";
import styled from "styled-components";
import Link from "@components/Link";

import { StyledButton } from "@styles/index.theme";
import { CLIENT_ID } from "config";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import {
	Text,
	Stack,
	Flex,
	Heading,
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
const Login = styled.div`
	min-width: 300px;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	input {
		margin: 10px 0;
	}
`;

const LoginOutside = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

// const Button = styled(StyledButton)`
// 	width: 100%;
// `;
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function LoginPage(): JSX.Element {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [showPassword, setShowPassword] = useState(false);
	const handleShowClick = () => setShowPassword(!showPassword);
	return (
		<>
			<Flex
				flexDirection="column"
				width="100wh"
				// height="100vh"
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
												<CFaUserAlt color="gray.300" />
											}
										/>
										<Input
											type="email"
											placeholder="email address"
										/>
									</InputGroup>
								</FormControl>
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
											placeholder="Password"
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
										<Link
											href="/"
											name="forgot password?"
										/>
									</FormHelperText>
								</FormControl>
								<Button
									borderRadius={6}
									type="submit"
									variant="solid"
									width="full"
									bg="text.800"
									_hover={{ bg: "text.600" }}
								>
									Login
								</Button>
							</Stack>
						</form>
					</Box>
				</Stack>
				<Box>
					<Link href="/" name="	New to us? Sign Up" />
				</Box>
			</Flex>
			{/* <LoginOutside>
				<Login>
					<input
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
					<input
						type="password"
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
					<Button
						onClick={(e) => {
							e.preventDefault();
							login(username, password);
						}}
					>
						Login
					</Button>
				</Login>
				<GoogleLogin
					clientId={CLIENT_ID}
					buttonText="Login"
					onSuccess={(response) => {
						console.log(response);
					}}
					onFailure={(response) => {
						console.log(response);
					}}
					cookiePolicy="single_host_origin"
				/>
			</LoginOutside> */}
		</>
	);
}

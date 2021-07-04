/* eslint-disable @typescript-eslint/no-explicit-any */
// import { GetServerSideProps } from "next";
import { Box } from "@chakra-ui/react";
import LoginForm from "@components/login/App";

export default function Login(): JSX.Element {
	return (
		<Box mx="50px">
			<LoginForm />
		</Box>
	);
}

// const CFaLock = chakra(FaLock);

// export default function LoginPage(): JSX.Element {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [error, setError] = useState("");
// 	const [showPassword, setShowPassword] = useState(false);
// 	const handleShowClick = () => setShowPassword(!showPassword);

// 	return (
// 		<HeadFoot>
// 			<Flex
// 				flexDirection="column"
// 				width="100wh"
// 				justifyContent="center"
// 				alignItems="center"
// 			>
// 				<Stack
// 					flexDir="column"
// 					mb="2"
// 					justifyContent="center"
// 					alignItems="center"
// 				>
// 					<Text fontSize="6xl" fontWeight="extrabold">
// 						Login
// 					</Text>
// 					<Box minW={{ base: "90%", md: "468px" }}>
// 						<form>
// 							<Stack spacing={4} p="1rem" boxShadow="md">
// 								<FormControl>
// 									<InputGroup>
// 										<InputLeftElement
// 											pointerEvents="none"
// 											children={
// 												<EmailIcon color="primary" />
// 											}
// 										/>
// 										<Input
// 											type="email"
// 											name="email"
// 											id="email"
// 											placeholder="email"
// 											aria-label="email"
// 											value={email}
// 											onChange={(e) => {
// 												setEmail(e.target.value);
// 											}}
// 											required
// 										/>
// 									</InputGroup>
// 								</FormControl>
// 								<FormControl>
// 									<InputGroup>
// 										<InputLeftElement
// 											pointerEvents="none"
// 											children={<CFaLock />}
// 										/>
// 										<Input
// 											type={
// 												showPassword
// 													? "text"
// 													: "password"
// 											}
// 											name="password"
// 											id="password"
// 											placeholder="Password"
// 											aria-label="password"
// 											value={password}
// 											onChange={(e) => {
// 												setPassword(e.target.value);
// 											}}
// 											required
// 										/>
// 										<InputRightElement
// 											width="4.5rem"
// 											mr={0}
// 										>
// 											<IconButton
// 												aria-label="Show Password"
// 												h="1.75rem"
// 												size="sm"
// 												onClick={handleShowClick}
// 												bg="transparent"
// 												_focus={{ outline: "none" }}
// 												outline="none"
// 												m={0}
// 												icon={
// 													showPassword ? (
// 														<ViewOffIcon />
// 													) : (
// 														<ViewIcon />
// 													)
// 												}
// 												_hover={{ bg: "transparent" }}
// 											>
// 												{showPassword ? "Hide" : "Show"}
// 											</IconButton>
// 										</InputRightElement>
// 									</InputGroup>
// 									<FormHelperText textAlign="right">
// 										<Link
// 											href="/forgot"
// 											name="forgot password?"
// 										/>
// 									</FormHelperText>
// 								</FormControl>
// 								{error ? (
// 									<Box color="red.500">{error}</Box>
// 								) : null}
// 								<Button
// 									width="full"
// 									onClick={(e: any) => {
// 										e.preventDefault();
// 										void validate(email)
// 											? login(email, password).then(
// 													(e) => {
// 														e.message == "success"
// 															? console.log(error)
// 															: setError(
// 																	e.message
// 															  );
// 													}
// 											  )
// 											: setError(
// 													"That email is not valid"
// 											  );
// 									}}
// 								>
// 									Login
// 								</Button>
// 								<GoogleButton />
// 							</Stack>
// 						</form>
// 					</Box>
// 				</Stack>
// 				<Flex flexDir="column">
// 					<Link href="/forgot" name="Forgot password?" />
// 					<Link href="/register" name="Don't have an account?" />
// 					<Link href="/privacy" name="Privacy Policy" />
// 				</Flex>
// 			</Flex>
// 		</HeadFoot>
// 	);
// }

// export async function getServerSideProps({ req, res }: any): Promise<any> {
// 	const sessionid = req.cookies.sessionid;
// 	if (!sessionid) return { props: {} };
// 	const sendData = {
// 		sessionid,
// 	};
// 	const { data } = await axios.post(`${DB_URL}/users/me`, sendData);
// 	if (data.data) {
// 		res.writeHead(307, {
// 			Location: "dashboard",
// 		});
// 		res.end();
// 	}
// 	return { props: {} };
// }

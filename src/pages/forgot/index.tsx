import { forgotPassword } from "@api/profile";
import { getProfileData } from "@api/profile";
import { getCookie } from "@lib/cookie";
import Link from "@components/link";
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
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import axios from "axios";
import Head from "@components/home/head";
import Foot from "@components/home/foot";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
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
												setEmail(e.target.value);
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
										forgotPassword(email).then((e) => {
											console.log(e);
											e.message == "success"
												? () => {
														void axios.post(
															"/api/email",
															{
																email
															}
														);
														window.location.href =
															"/forgot/email";
												  }
												: setError(e.message);
										});
									}}
								>
									Send Email
								</Button>
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

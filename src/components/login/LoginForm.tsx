import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	chakra,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	HTMLChakraProps,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	useToast,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
interface IFormInput {
	username: string;
	password: string;
}

export function LoginForm(props: HTMLChakraProps<"form">): JSX.Element {
	const toast = useToast();
	const [show, setShow] = useState(false);
	const router = useRouter();
	const [signInError, setSignInError] = useState("");
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInput>();
	useEffect(() => {
		if (signInError) {
			toast({
				title: "Error",
				description: `${signInError}`,
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	}, [signInError]);

	const onSubmit = async (data: any) => {
		try {
			await Auth.signIn(data.username, data.password);
			router.push(`/`);
		} catch (error) {
			console.error(error);
			setSignInError(error.message);
		}
	};

	return (
		<chakra.form
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
			{...props}
		>
			<Stack spacing="6">
				<FormControl
					id="username"
					isInvalid={errors.username ? true : false}
				>
					<FormLabel>Username</FormLabel>
					<Input
						type="text"
						autoComplete="username"
						required
						{...register("username")}
					/>
					<FormErrorMessage>
						{errors.username ? errors.username.message : null}
					</FormErrorMessage>
				</FormControl>
				<FormControl id="password">
					<Flex justify="space-between">
						<FormLabel>Password</FormLabel>
						<Box
							as="a"
							href="/forgot"
							fontWeight="semibold"
							fontSize="sm"
						>
							Forgot Password?
						</Box>
					</Flex>
					<InputGroup>
						<InputRightElement>
							<IconButton
								bg="transparent"
								_focus={{ outline: "none" }}
								outline="none"
								variant="ghost"
								aria-label={
									show ? "Mask password" : "Reveal password"
								}
								icon={show ? <ViewIcon /> : <ViewOffIcon />}
								onClick={() => setShow(!show)}
							/>
						</InputRightElement>
						<Input
							name="password"
							type={show ? "text" : "password"}
							autoComplete="current-password"
							required
						/>
					</InputGroup>
				</FormControl>
				<Button
					type="submit"
					colorScheme="blue"
					size="lg"
					fontSize="md"
				>
					Sign in
				</Button>
			</Stack>
		</chakra.form>
	);
}

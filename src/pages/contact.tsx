import Head from "@components/home/head";
import Foot from "@components/home/foot";
import Container from "@components/container";
import {
	Heading,
	Stack,
	VStack,
	Text,
	useClipboard,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from "formik";
import InputField from "@components/inputfield";

interface MyFormValues {
	name: string;
	company: string;
	email: string;
	message: string;
}

export default function Home(): JSX.Element {
	const initialValues: MyFormValues = {
		name: "",
		company: "",
		email: "",
		message: "",
	};
	const [value, setValue] = useState("mail@periodize.org");
	const { hasCopied, onCopy } = useClipboard(value);
	return (
		<>
			<Head />
			<Container>
				<Heading as="h2" size="2xl" mb={4}>
					Contact Us
				</Heading>
				<Flex
					flexDir={{ base: "column", lg: "row" }}
					align="flex-start"
					width="90%"
					margin="auto"
				>
					<Flex flexDir="column" align="flex-start">
						<Heading as="h2" size="l" pt={2} color="white">
							Email us:
						</Heading>
						<Text
							mb={4}
							onClick={onCopy}
							bgGradient="linear(to-r,#42CAF7, white)"
							bgClip="text"
							fontWeight="extrabold"
							pt={2}
						>
							mail@periodize.org
						</Text>
					</Flex>
					<Text
						maxW={{ base: "90%", lg: "50%" }}
						textAlign="left"
						color="white"
						lineHeight="tall"
						fontSize=""
					>
						The team is open for your ideas, questions and needs.
						Our clients get the superior results when a short-term
						acquaintance turns into a long-term collaboration.
					</Text>

					<Text
						maxW={{ base: "90%", lg: "50%" }}
						textAlign="left"
						color="white"
						letterSpacing="widest"
						margin="auto"
						mt="50px"
						mb={2}
					>
						Hit us up
					</Text>
					<Formik
						initialValues={initialValues}
						onSubmit={(values, actions) => {
							console.log({ values, actions });
							alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}}
					>
						<Form>
							<InputField
								name="usernameOrEmail"
								placeholder="username or email"
								label="Username or Email"
							/>
							<label htmlFor="company">Company</label>
							<Field
								id="company"
								name="company"
								placeholder="Company"
							/>

							<label htmlFor="email">Email</label>
							<Field
								id="email"
								name="email"
								placeholder="Email"
								type="email"
							/>
							<label htmlFor="email">Email</label>
							<Field
								id="message"
								name="message"
								placeholder="What's up?"
								type="message"
							/>
							<Button type="submit" variant="outline">
								Submit
							</Button>
						</Form>
					</Formik>
				</Flex>
			</Container>
			<Foot />
		</>
	);
}

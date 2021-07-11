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

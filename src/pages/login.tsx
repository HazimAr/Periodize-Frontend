/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { login } from "@api/auth";
import { StyledButton } from "@styles/index.theme";
import { CLIENT_ID } from "config";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";

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

const Button = styled(StyledButton)`
	width: 100%;
`;

export default function LoginPage(): JSX.Element {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<h1>Login</h1>
			<LoginOutside>
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
						console.log(response)
					}}
					onFailure={(response) => {
						console.log(response)
					}}
					cookiePolicy="single_host_origin"
				/>
			</LoginOutside>
		</>
	);
}

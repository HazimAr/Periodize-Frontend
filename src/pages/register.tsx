import { createUser } from "@api/auth";
import { StyledButton } from "@styles/index.theme";
import { useState } from "react";
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

// const Error = styled.p`
// 	color: red;
// 	margin: 0;
// `;

// eslint-disable-next-line import/no-default-export
export default function LoginPage(): JSX.Element {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");


	return (
		<>
			<h1>Login</h1>
			<LoginOutside>
				<Login>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						aria-label="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						required
					/>
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
						aria-label="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
						required
					/>

					<Button
						onClick={(e) => {
							e.preventDefault();
							createUser(email, username, password);
						}}
					>
						Sign Up
					</Button>
				</Login>
			</LoginOutside>
		</>
	);
}

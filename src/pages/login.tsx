import { getCookie } from "@lib/cookie";
import { login, getProfileData } from "@api/auth";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "@styles/index.theme";

const Forgot = styled.a`
	color: #4141ff;
	text-align: center;
`;
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

const Error = styled.p`
	color: red;
	margin: 0;
`;

// eslint-disable-next-line import/no-default-export
export default function loginPage(): JSX.Element {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		const sess = getCookie("sessionid");
		if (sess !== null && sess !== "" && sess !== undefined) {
			getProfileData().then((data2) => {
				if (data2.blacklisted) {
					window.location.href = "/blacklisted";
				}
			});
		}
	}, []);

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
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
						required
					/>
					<Error>{error}</Error>
					<Button
						onClick={(e) => {
							e.preventDefault();
							login(username, password).then((e) => {
								setError(e.message)
							});
						}}
					>
						Login
					</Button>
					<Forgot href="/forgot">Forgot password?</Forgot>
				</Login>
			</LoginOutside>
		</>
	);
}

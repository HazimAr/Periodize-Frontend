import { createUser, login } from "@api/auth";
import { CLIENT_ID } from "config";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";

const Google = styled(GoogleLogin)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function GoogleButton() {
	return (
		<Google
			clientId={CLIENT_ID}
			buttonText="Login"
			onSuccess={(response: any) => {
				login(
					response.profileObj.email,
					response.profileObj.googleId
				).then(async (data) => {
					// Check if user is not found then will create one if not found
					if (data.code == 404) {
						await createUser(
							response.profileObj.email,
							response.profileObj.name,
							response.profileObj.googleId,
							response.profileObj.imageUrl
						);
					}
					window.location.href = "/dashboard";
				});
			}}
			cookiePolicy="single_host_origin"
		>
			Sign in with Google
		</Google>
	);
}

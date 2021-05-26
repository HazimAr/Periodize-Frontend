import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import Link from "@components/Link";
import { Flex } from "@chakra-ui/layout";
import { ColorModeButton } from "./ColorModeButton";

const Header = styled.header`
	background-color: #1a202c;
	padding: 5px 50px;
	display: flex;
	box-sizing: border-box;
	border-top: 5px #5cfff1 solid;
	justify-content: space-between;
	align-items: center;
`;
const StyledLink = styled.a`
	margin: 0 20px;
`;
// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Header>
			<h2>Periodize</h2>
			<Flex>
				<ColorModeButton />
				<Link url="/login" name="login" />
				<Link url="/register" name="register" />
				<StyledLink aria-label="Github">
					<FaGithub size="30px" />
				</StyledLink>
				<StyledLink aria-label="LinkedIn">
					<FaLinkedin size="30px" />
				</StyledLink>
			</Flex>
		</Header>
	);
}

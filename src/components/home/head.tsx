/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { Box, Flex, Spacer } from "@chakra-ui/react";
import AvatarBadge from "@components/avatar";
import Link from "@components/link";
import NextLink from "next/link";
import StyledButton from "@components/styledbutton";
import useProfile from "@hooks/useProfile";
import styled from "styled-components";

const Header = styled.header`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	text-align: center;
`;

const StyledLink = styled.li`
	margin: 10px auto;
	position: relative;
	transition: all ease-in-out 0.3s;
	&:hover {
		cursor: pointer;
		color: var(--highlight);
	}
	&::before {
		content: "";
		position: absolute;
		border-width: 1px;
		width: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 2px;
		bottom: 1px;
		background-color: var(--highlight);
		visibility: hidden;
		transition: all 0.2s ease-in-out;
	}
	&:hover::before {
		visibility: visible;
		width: 100%;
	}
`;

const StyledMenuContainer = styled.div`
	display: none;
	height: 100vh;
	width: 60vw;
	position: fixed;
	right: -100vw;
	top: 0;
	z-index: 100;
	background-color: white;
	@media (max-width: 800px) {
		display: block;
	}
`;
const DeselectMenu = styled.button`
	height: 100vh;
	left: -40vw;
	top: 0;
	width: 40vw;
	position: absolute;
`;

const StyledMenuList = styled.ul`
	display: flex;
	flex-direction: column;
	height: 60%;
	justify-content: center;
	& li {
		font-size: 20px;
		line-height: 18px;
		padding: 15px 0;
		text-align: left;
		margin: 0;
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Head(): JSX.Element {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const user: any = useProfile();

	const body = user ? (
		<Flex align="center">
			<Box ml={8}>
				<AvatarBadge
					name={user.username}
					src={user.image ? user.image : "https://bit.ly/broken-link"}
					size="sm"
				/>
			</Box>
		</Flex>
	) : (
		<Flex align="center">
			<Box ml={1.5} mr={1.5}>
				<Link href="/login" name="Login" />
			</Box>
			<Box ml={1.5} mr={1.5}>
				<NextLink href="/register">
					<a>
						<StyledButton> Sign Up</StyledButton>
					</a>
				</NextLink>
			</Box>
		</Flex>
	);

	return (
		<Box h="100px">
			<Header>
				<Flex
					maxW="1200px"
					align="center"
					width="100%"
					px="10px"
					py="25px"
					textAlign="center"
				>
					<Link href="/" name="Periodize" />
					<Spacer />
					<Flex>
						<Box mr={1.5} ml={1.5}>
							<Link href="/about" name="About" />
						</Box>
						<Box mr={1.5} ml={1.5}>
							<Link href="/contact" name="Contact" />
						</Box>
					</Flex>

					{body}
				</Flex>
			</Header>
		</Box>
	);
}
export { StyledLink, StyledMenuContainer, StyledMenuList, DeselectMenu };

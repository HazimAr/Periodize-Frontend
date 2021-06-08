/* eslint-disable no-console */
/* eslint-disable no-negated-condition */
import { Box, Flex, Spacer } from "@chakra-ui/react";
import AvatarBadge from "@components/avatar";
import StyledButton from "@components/styledbutton";
import useProfile from "@hooks/useProfile";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Header = styled.header`
	position: fixed;
	width: 100%;
	min-height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	text-align: center;
	background: #121129;
	color: white;
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
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user !== undefined) {
			setLoading(false);
		}
	}, [user]);

	let body = null;
	if (loading) {
		console.log();
	} else if (!user) {
		body = (
			<Flex align="center">
				<Box mx={1.5}>
					<NextLink href="/about">
						<a>About</a>
					</NextLink>
				</Box>
				<Box mx={1.5}>
					<NextLink href="/contact">
						<a>Contact</a>
					</NextLink>
				</Box>
				<Box mx={1.5}>
					<NextLink href="/login">
						<a>Login</a>
					</NextLink>
				</Box>
				<Box mx={1.5}>
					<NextLink href="/register">
						<a>
							<StyledButton>Sign Up</StyledButton>
						</a>
					</NextLink>
				</Box>
			</Flex>
		);
	} else {
		body = (
			<Flex align="center">
				<Box mx={1.5}>
					<NextLink href="/about">
						<a>About</a>
					</NextLink>
				</Box>
				<Box mx={1.5}>
					<NextLink href="/contact">
						<a>Contact</a>
					</NextLink>
				</Box>
				<Box ml="5px">
					<NextLink href="/dashboard">
						<a>
							<AvatarBadge
								name={user.username}
								src={
									user.image
										? user.image
										: "https://bit.ly/broken-link"
								}
								size="sm"
							/>
						</a>
					</NextLink>
				</Box>
			</Flex>
		);
	}

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
					<NextLink href="/">
						<a>Periodize</a>
					</NextLink>
					<Spacer />

					{body}
				</Flex>
			</Header>
		</Box>
	);
}
export { StyledLink, StyledMenuContainer, StyledMenuList, DeselectMenu };

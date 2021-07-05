/* eslint-disable no-console */
/* eslint-disable no-negated-condition */
import { Box, Flex, Spacer } from "@chakra-ui/react";
import AvatarBadge from "@components/avatar";
import Container from "@components/home/container";
import ContainerInside from "@components/home/containerInside";
import StyledButton from "@components/styledbutton";
import useProfile from "@hooks/useProfile";
import NextLink from "next/link";
import { useEffect, useState } from "react";

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
			<Container as="header">
				<ContainerInside>
					<Flex align="center" textAlign="center">
						<NextLink href="/">
							<a>Periodize</a>
						</NextLink>
						<Spacer />

						{body}
					</Flex>
				</ContainerInside>
			</Container>
		</Box>
	);
}

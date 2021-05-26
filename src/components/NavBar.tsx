import {
  Box,
  Flex,
  Link,
  HStack,
  Button,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { ColorModeButton } from "./ColorModeButton";
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });
  console.log("user", data?.me);
  const { colorMode } = useColorMode();
  let body = null;
  if (loading) {
  } else if (!data?.me) {
    body = (
      <HStack spacing={4} mr={4} alignItems="center">
        <ColorModeButton />
        <Link as={NextLink} href="/login" color="text.200">
          login
        </Link>
        <Link as={NextLink} href="/register" color="text.200">
          register
        </Link>
      </HStack>
    );
  } else {
    body = (
      <HStack spacing={4} mr={4} alignItems="center">
        <ColorModeButton />
        <Link as={NextLink} href="/create-program" mr={2} color="text.200">
          Create
        </Link>
        <Link as={NextLink} href="/dashboard" mr={2} color="text.200">
          Dashboard
        </Link>
        <Link as={NextLink} href="/" color="text.200">
          {data.me.username}
        </Link>
        <Button
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
          isLoading={logoutFetching}
          variant="link"
          color={colorMode === "dark" ? "text.200" : "black"}
        >
          logout
        </Button>
      </HStack>
    );
  }
  return (
    <Flex p={4} zIndex={1} position="sticky" top={0} alignItems="center">
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Link as={NextLink} href="/">
          <a>
            <Heading>MySite</Heading>
          </a>
        </Link>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};

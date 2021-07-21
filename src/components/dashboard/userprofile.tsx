import {
  Avatar,
  chakra,
  HStack,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import * as React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useUser } from "../../context/AuthContext";

export const UserProfile = () => {
  const { user } = useUser();
  const CLogOut = chakra(RiLogoutBoxRLine);
  const router = useRouter();
  const placeholder = {
    username: "Loading...",
  };
  if (user) {
    console.log(user.getUsername()); 
  }

  const signUserOut = async () => {
    await Auth.signOut();
    router.push("/login");
  };
  return (
    <HStack
      spacing="4"
      px="2"
      // flexShrink={0}
      borderTopWidth="1px"
      p="4"
      w="100%"
      justify="space-around"
    >
      <Avatar
        size="sm"
        // name={user ? user.getUsername : placeholder.username}
        // src={user?.image}
      />

      <Link href="/dashboard/profile">
        <Text fontSize="sm">
          {user ? user.getUsername() : placeholder.username}
        </Text>
      </Link>
      <IconButton
        aria-label="sign out"
        icon={<CLogOut />}
        onClick={() => signUserOut()}
      />
    </HStack>
  );
};

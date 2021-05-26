import { Center, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
interface DashboardSideBarProps {}

export const DashboardSideBar: React.FC<DashboardSideBarProps> = ({}) => {
  return (
    <Flex flexDir={{ base: "row", lg: "column" }}>
      <Center w="100%" h="20vh">
        <Link as={NextLink} href="/my-programs" mr={2} color="text.200">
          My Programs
        </Link>
      </Center>
      <Center w="100%" h="20vh">
        <Link as={NextLink} href="/saved-programs" mr={2} color="text.200">
          Saved
        </Link>
      </Center>
      <Center w="100%" h="20vh">
        <Link as={NextLink} href="/progress" mr={2} color="text.200">
          Progress
        </Link>
      </Center>
      <Center w="100%" h="20vh">
        <Link as={NextLink} href="/library" mr={2} color="text.200">
          Library
        </Link>
      </Center>{" "}
    </Flex>
  );
};

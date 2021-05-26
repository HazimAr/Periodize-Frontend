import { ChatIcon, CopyIcon, StarIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Container } from "next/app";
import NextLink from "next/link";
import { title } from "node:process";
import React from "react";
import { DashboardSideBar } from "../../components/DashboardSideBar";
import { EditDeletePostButtons } from "../../components/EditDeletePostButtons";
import { Layout } from "../../components/Layout";
import { NavBar } from "../../components/NavBar";
import { UpvoteSection } from "../../components/UpvoteSection";
import { Copy } from "../../components/CopyToClipboard";
import {
  ProgramsQuery,
  useDeleteProgramMutation,
  useMeQuery,
  useProgramsQuery,
  useUserProgramsQuery,
} from "../../generated/graphql";

import { withApollo } from "../../utils/withApollo";

const MyPrograms = () => {
  // const { data, loading, error, fetchMore, variables } = useProgramsQuery({
  //   variables: {
  //     limit: 15,
  //     cursor: null,
  //   },
  //   notifyOnNetworkStatusChange: true,
  // });

  const {
    data: myPrograms,
    loading,
    error,
    variables,
    fetchMore,
  } = useUserProgramsQuery();

  if (!loading && !myPrograms) {
    return (
      <div>
        query failed<div>{error?.message}</div>
      </div>
    );
  }
  return (
    <Box>
      {!myPrograms && loading ? (
        <div>...loading</div>
      ) : (
        <Box>
          <NavBar />
          <Flex justify="center">
            <DashboardSideBar />
            <Box w={{ base: "85%", lg: "50%" }}>
              <Accordion allowMultiple>
                {myPrograms?.userPrograms?.map((p) =>
                  !p ? null : (
                    <AccordionItem key={p.id} _hover={{ bg: "tomato" }}>
                      <h2>
                        <Box>
                          <Flex>
                            <UpvoteSection program={p} />
                            <Flex flexDir="column">
                              <Box
                                // flex="1"
                                textAlign="left"
                                pt={2}
                                fontSize={26}
                                m={0}
                              >
                                <NextLink
                                  href="/program/[id]"
                                  as={`/program/${p.id}`}
                                >
                                  <a target="_blank">{p.title}</a>
                                </NextLink>
                              </Box>
                              <Box>{`posted ${p.formattedDate.lastPosted} ago`}</Box>
                              <Flex>
                                <AccordionButton p={0} m={0} w="6">
                                  <AccordionIcon />
                                </AccordionButton>
                                <Flex flexDir="column">
                                  <Box></Box>
                                  <Box textAlign="left">
                                    <IconButton
                                      aria-label="commments"
                                      icon={<ChatIcon />}
                                      variant="ghost"
                                    />
                                    <Copy
                                      url={`localhost:3000/program/${p.id}`}
                                    />
                                    <IconButton
                                      aria-label="share"
                                      icon={<StarIcon />}
                                      variant="ghost"
                                      color={
                                        p.title.length > 3 ? "text.100" : ""
                                      }
                                    />
                                  </Box>
                                </Flex>
                              </Flex>
                              <AccordionPanel pl={0} pb={4}>
                                {p.description}
                              </AccordionPanel>
                            </Flex>
                          </Flex>
                        </Box>
                      </h2>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default withApollo({ ssr: false })(MyPrograms);

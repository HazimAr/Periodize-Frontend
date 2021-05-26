import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { EditDeletePostButtons } from "../../components/EditDeletePostButtons";
import { Layout } from "../../components/Layout";
import { NavBar } from "../../components/NavBar";
import { UpvoteSection } from "../../components/UpvoteSection";
import {
  ProgramsQuery,
  useDeleteProgramMutation,
  useMeQuery,
  useProgramsQuery,
  useUserProgramsQuery,
} from "../../generated/graphql";

import { withApollo } from "../../utils/withApollo";

const Dashboard = () => {
  const { data: meData } = useMeQuery();
  const { data, loading, error, fetchMore, variables } = useProgramsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  const { data: myPrograms } = useUserProgramsQuery();

  if (!loading && !data) {
    return (
      <div>
        query failed<div>{error?.message}</div>
      </div>
    );
  }
  return (
    <Box>
      {!data && loading ? (
        <div>...loading</div>
      ) : (
        <Box>
          <NavBar />
          <Grid
            h="90vh"
            w="95vw"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={2}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Grid templateRows="repeat(5, 1fr)" gap={0}>
                <Center w="100%" h="20vh">
                  My Programs
                </Center>
                <Center w="100%" h="20vh">
                  Saved Programs
                </Center>
                <Center w="100%" h="20vh">
                  Progress
                </Center>
                <Center w="100%" h="20vh">
                  Library
                </Center>
              </Grid>
            </GridItem>
            <GridItem colSpan={6} rowSpan={2} />
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default withApollo({ ssr: false })(Dashboard);

import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { API } from "aws-amplify";
import React, { ReactElement, useState } from "react";
import { Lift, LiftsByUserQuery } from "../../API";
import { useUser } from "../../context/AuthContext";
import { liftsByUser } from "../../graphql/queries";
import LiftAccordion from "./liftAccordion";
export default function LiftsList(): ReactElement {
  const { user } = useUser();
  const [lifts, setLifts] = useState<Lift[]>([]);
  const [hasUser, setHasUser] = useState(false);

  const fetchMyLifts = async (): Promise<Lift[]> => {
    const myLifts = (await API.graphql({
      query: liftsByUser,
      variables: {
        owner: user.getUsername(),
      },
    })) as {
      data: LiftsByUserQuery;
      errors: any;
    };
    if (myLifts.data) {
      setLifts(myLifts.data.liftsByUser.items as Lift[]);
      return myLifts.data.liftsByUser.items as Lift[];
    } else {
      throw new Error("Could not get lifts");
    }
  };
  if (!user) {
    return <Box>Loading lifts...</Box>;
  }
  if (user && !hasUser) {
    fetchMyLifts();
    setHasUser(true);
  }

  console.log("current user: ", user);
  console.log("My lifts:" ,lifts);
  return (
    <Container maxW="container.md">
      <Heading>My Lifts</Heading>

      <Stack as="ul" spacing="4" my="4">
        {lifts[0] ? <LiftAccordion lifts={lifts} setLifts={setLifts} />:<Text>No lifts found, create a lift to get started</Text>}
      </Stack>
    </Container>
  );
}

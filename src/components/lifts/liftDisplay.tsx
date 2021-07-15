import { AddIcon, ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Link, VStack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Lift } from "../../API";

interface Props {
  lifts: Lift[];
}

export default function LiftDisplay({ lifts }: Props): ReactElement {
  console.log(lifts);
  // const columns = lifts[0] && Object.keys(lifts[0]);

  return (
    <Box border="1px solid white" p="12px" borderRadius="md">
      <VStack spacing={6}>
        <Flex justify="space-between" w="100%">
          <Box>Movement</Box>
          <Box>Actions</Box>
        </Flex>
        {lifts.map((lift) => (
          <Flex key={lift.id} justifyContent="space-between" w="100%">
            <Link href={`/dashboard/lifts/${lift.id}`}>
              {lift.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
              )}
            </Link>
            <Box>{lift.records ? <i>No records</i> : "hi"} </Box>
            <Flex>
              <Link href={`/dashboard/lifts/${lift.id}`}>
                <IconButton
                  aria-label="edit lift"
                  size="sm"
                  icon={<EditIcon />}
                  _focus={{ outline: "none" }}
                  variant="ghost"
                />
              </Link>

              <IconButton
                aria-label="create lift"
                size="sm"
                icon={<AddIcon />}
                _focus={{ outline: "none" }}
                variant="ghost"
              />
              <IconButton
                aria-label="more details"
                size="sm"
                icon={<ChevronDownIcon />}
                _focus={{ outline: "none" }}
                variant="ghost"
              />
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}

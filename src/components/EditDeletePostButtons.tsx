import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useDeleteProgramMutation, useMeQuery } from "../generated/graphql";

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId,
}) => {
  const { data: meData } = useMeQuery();
  const [deleteProgram] = useDeleteProgramMutation();
  const { colorMode } = useColorMode();
  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Box>
      <NextLink href="/program/edit/[id]" as={`/program/edit/${id}`}>
        <a target="_blank">
          <IconButton
            variant="ghost"
            aria-label="delete"
            icon={<EditIcon />}
            color={colorMode === "dark" ? "text.200" : "black"}
          />
        </a>
      </NextLink>

      <IconButton
        variant="ghost"
        aria-label="delete"
        color={colorMode === "dark" ? "text.200" : "black"}
        icon={<DeleteIcon />}
        onClick={() => {
          deleteProgram({
            variables: { id },
            update: (cache) => {
              //Program:77
              cache.evict({ id: "Program:" + id });
            },
          });
        }}
      />
    </Box>
  );
};

import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  ProgramSnippetFragment,
  useVoteMutation,
  VoteMutation,
} from "../generated/graphql";
import gql from "graphql-tag";
import { ApolloCache } from "@apollo/client";
interface UpvoteSectionProps {
  program: ProgramSnippetFragment;
}

const updateAfterVote = (
  value: number,
  postId: number,
  cache: ApolloCache<VoteMutation>
) => {
  const data = cache.readFragment<{
    id: number;
    points: number;
    voteStatus: number | null;
  }>({
    id: "Program:" + postId,
    fragment: gql`
      fragment _ on Program {
        id
        points
        voteStatus
      }
    `,
  });

  if (data) {
    if (data.voteStatus === value) {
      return;
    }

    const newPoints =
      (data.points as number) + (!data.voteStatus ? 1 : 2) * value;
    cache.writeFragment({
      id: "Program:" + postId,
      fragment: gql`
        fragment __ on Program {
          points
          voteStatus
        }
      `,
      data: { points: newPoints, voteStatus: value },
    });
  }
};

export const UpvoteSection: React.FC<UpvoteSectionProps> = ({ program }) => {
  const [loadingState, setLoadingState] =
    useState<"upvote-loading" | "downvote-loading" | "not-loading">(
      "not-loading"
    );
  const [vote] = useVoteMutation();
  return (
    <Flex flexDir="column" justifyItems="center" alignItems="center" mr={4}>
      <IconButton
        aria-label="upvote"
        icon={<ChevronUpIcon />}
        variant="ghost"
        colorScheme={program.voteStatus === 1 ? "green" : undefined}
        isLoading={loadingState === "upvote-loading"}
        onClick={async () => {
          if (program.voteStatus === 1) {
            return;
          }
          setLoadingState("upvote-loading");
          await vote({
            variables: {
              postId: program.id,
              value: 1,
            },
            update: (cache) => updateAfterVote(1, program.id, cache),
          });

          setLoadingState("not-loading");
        }}
      />
      {program.points}
      <IconButton
        aria-label="downvote"
        icon={<ChevronDownIcon />}
        variant="ghost"
        colorScheme={program.voteStatus === -1 ? "red" : undefined}
        isLoading={loadingState === "downvote-loading"}
        onClick={async () => {
          if (program.voteStatus === -1) {
            return;
          }
          setLoadingState("downvote-loading");
          await vote({
            variables: {
              postId: program.id,
              value: -1,
            },
            update: (cache) => updateAfterVote(-1, program.id, cache),
          });

          setLoadingState("not-loading");
        }}
      />
    </Flex>
  );
};

import { createWithApollo } from "./createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedPrograms } from "../generated/graphql";
import { NextPageContext } from "next";

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            programs: {
              keyArgs: [],
              merge(
                existing: PaginatedPrograms | undefined,
                incoming: PaginatedPrograms
              ): PaginatedPrograms {
                return {
                  ...incoming,
                  programs: [
                    ...(existing?.programs || []),
                    ...incoming.programs,
                  ],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(createClient);

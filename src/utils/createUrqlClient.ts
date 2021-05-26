import { dedupExchange, fetchExchange } from "urql";
import {
  LogoutMutation,
  MeQuery,
  MeDocument,
  LoginMutation,
  RegisterMutation,
  VoteMutationVariables,
  DeleteProgramMutationVariables,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { cacheExchange, Resolver, Cache } from "@urql/exchange-graphcache";
import { Exchange } from "urql";
import { pipe, tap } from "wonka";
import Router from "next/router";
import gql from "graphql-tag";
const errorExchange: Exchange = ({ forward }) => (ops$) => {
  return pipe(
    forward(ops$),
    tap(({ error }) => {
      if (error?.message.includes("not authenticated")) {
        Router.replace("/login");
      }
    })
  );
};

import { stringifyVariables } from "@urql/core";
import { fieldInfoOfKey } from "@urql/exchange-graphcache/dist/types/store";
import { isServer } from "./isServer";
// import { Resolver, Variables, NullArray } from "../types";

export type MergeMode = "before" | "after";

export interface PaginationParams {
  offsetArgument?: string;
  limitArgument?: string;
  mergeMode?: MergeMode;
}

export const cursorPagination = (): Resolver => {
  // const compareArgs = (
  //   fieldArgs: Variables,
  //   connectionArgs: Variables
  // ): boolean => {
  //   for (const key in connectionArgs) {
  //     if (key === offsetArgument || key === limitArgument) {
  //       continue;
  //     } else if (!(key in fieldArgs)) {
  //       return false;
  //     }

  //     const argA = fieldArgs[key];
  //     const argB = connectionArgs[key];

  //     if (
  //       typeof argA !== typeof argB || typeof argA !== "object"
  //         ? argA !== argB
  //         : stringifyVariables(argA) !== stringifyVariables(argB)
  //     ) {
  //       return false;
  //     }
  //   }

  //   for (const key in fieldArgs) {
  //     if (key === offsetArgument || key === limitArgument) {
  //       continue;
  //     }
  //     if (!(key in connectionArgs)) return false;
  //   }

  //   return true;
  // };

  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info;
    // console.log(entityKey, fieldName);
    const allFields = cache.inspectFields(entityKey);
    // console.log("all fields: ", allFields);
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }

    // console.log("fieldsArgs: ", fieldArgs);
    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    const isItInTheCache = cache.resolve(
      cache.resolve(entityKey, fieldKey) as string,
      "programs"
    );
    info.partial = !isItInTheCache;
    let hasMore = true;
    const results: string[] = [];
    fieldInfos.forEach((fi) => {
      const key = cache.resolve(entityKey, fi.fieldKey) as string;
      const data = cache.resolve(key, "programs") as string[];
      const _hasMore = cache.resolve(key, "hasMore");
      // console.log("data: ", data);
      if (!_hasMore) {
        hasMore = _hasMore as boolean;
      }
      results.push(...data);
    });

    return {
      __typename: "PaginatedPrograms",
      hasMore,
      programs: results,
    };
  };
};

function invalidateAllPrograms(cache: Cache) {
  const allFields = cache.inspectFields("Query");
  const fieldInfos = allFields.filter((info) => info.fieldName === "programs");
  fieldInfos.forEach((fi) => {
    cache.invalidate("Query", "programs", fi.arguments || {});
  });
  cache.invalidate("Query", "programs", {
    limit: 15,
  });
}

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = "";
  if (isServer()) {
    cookie = ctx?.req?.headers?.cookie;
  }

  return {
    url: process.env.NEXT_PUBLIC_API_URL as string,
    fetchOptions: {
      credentials: "include" as const,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        resolvers: {
          Query: {
            programs: cursorPagination(),
          },
        },
        updates: {
          Mutation: {
            deleteProgram: (_result, args, cache, info) => {
              cache.invalidate({
                __typename: "Program",
                id: (args as DeleteProgramMutationVariables).id,
              });
            },
            vote: (_result, args, cache, info) => {
              const { postId, value } = args as VoteMutationVariables;
              const data = cache.readFragment(
                gql`
                  fragment _ on Program {
                    id
                    points
                    voteStatus
                  }
                `,
                { id: postId } as any
              );
              if (data) {
                if (data.voteStatus === args.value) {
                  return;
                }

                const newPoints =
                  (data.points as number) + (!data.voteStatus ? 1 : 2) * value;
                cache.writeFragment(
                  gql`
                    fragment __ on Program {
                      points
                      voteStatus
                    }
                  `,
                  { id: postId, points: newPoints, voteStatus: value } as any
                );
              }
            },
            createProgram: (_result, args, cache, info) => {
              invalidateAllPrograms(cache);
            },
            logout: (_result, args, cache, info) => {
              betterUpdateQuery<LogoutMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                () => ({ me: null })
              );
            },
            login: (_result, args, cache, info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.login.errors) {
                    return query;
                  } else {
                    return {
                      me: result.login.user,
                    };
                  }
                }
              );
              invalidateAllPrograms(cache);
            },
            register: (_result, args, cache, info) => {
              betterUpdateQuery<RegisterMutation, MeQuery>(
                cache,
                { query: MeDocument },
                _result,
                (result, query) => {
                  if (result.register.errors) {
                    return query;
                  } else {
                    return {
                      me: result.register.user,
                    };
                  }
                }
              );
            },
          },
        },
      }),
      errorExchange,
      ssrExchange,
      fetchExchange,
    ],
  };
};

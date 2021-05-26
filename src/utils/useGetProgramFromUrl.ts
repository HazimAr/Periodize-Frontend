import { useProgramQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";
export const useGetProgramFromUrl = () => {
  const intId = useGetIntId();
  return useProgramQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};

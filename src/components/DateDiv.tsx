import { Box } from "@chakra-ui/react";
import React from "react";

interface DateDivProps {
  milli: string;
}

export const DateDiv: React.FC<DateDivProps> = ({ milli }) => {
  let date: Date = new Date(parseInt(milli, 10));
  const newDate = date.toString();
  console.log(newDate, typeof newDate);
  return <Box>submitted {newDate}</Box>;
};

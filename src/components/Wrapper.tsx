import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";
interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  // const bg = useColorModeValue("white", "black");
  // const color = useColorModeValue("black", "white");
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
      mt={8}
      mx="auto"
      // bg={bg}
      // color={color}
    >
      {children}
    </Box>
  );
};

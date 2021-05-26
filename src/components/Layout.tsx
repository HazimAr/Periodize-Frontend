// import React from "react";
import { Box } from "@chakra-ui/layout";
import { NavBar } from "./NavBar";
import { Wrapper } from "./Wrapper";

interface LayoutProps {
  variant?: "small" | "regular";
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <Box width="100%" height="100%">
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </Box>
  );
};

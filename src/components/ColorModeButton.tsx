import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, Button, IconButton } from "@chakra-ui/react";
import React from "react";

interface ColorModeButtonProps {}

export const ColorModeButton: React.FC<ColorModeButtonProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton
        onClick={toggleColorMode}
        aria-label="toggle darkmode"
        variant="ghost"
        icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
        mb={{ base: 6, sm: 0 }}
        mr={{ base: 0, sm: 8 }}
        _focus={{ outline: "none" }}
        color="text.200"
      />
    </header>
  );
};

import { useState, useEffect } from "react";

import {
  IconButton,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverHeader,
  useClipboard,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

export const Copy = ({ url }) => {
  const [value, setValue] = useState(url);
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <IconButton
          aria-label="share"
          icon={<CopyIcon />}
          variant="ghost"
          onClick={onCopy}
        />
      </PopoverTrigger>
      {hasCopied ? (
        <PopoverContent w="125px">
          <PopoverHeader fontWeight="semibold">Copied!</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
        </PopoverContent>
      ) : (
        <></>
      )}
    </Popover>
  );
};

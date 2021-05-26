/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-default-export */
import { CopyIcon } from "@chakra-ui/icons";
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
import { useState } from "react";

<<<<<<< Updated upstream:src/components/CopyToClipboard.tsx
export default function Copy(url: string ):JSX.Element {
  const [value] = useState(url);
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
        <div/>
      )}
    </Popover>
  );
=======
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
>>>>>>> Stashed changes:src/components/CopyToClipboard.js
};

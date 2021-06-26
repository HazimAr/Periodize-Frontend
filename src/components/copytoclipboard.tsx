/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-default-export */
import { CopyIcon } from "@chakra-ui/icons";
import {
	IconButton,
	Popover,
	PopoverArrow,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	useClipboard,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Copy(url: string): JSX.Element {
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
				<div />
			)}
		</Popover>
	);
}

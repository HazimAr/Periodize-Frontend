import { QuestionIcon } from "@chakra-ui/icons";
import {
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverProps,
	PopoverTrigger,
} from "@chakra-ui/react";

type PopProps = {
	title: string;
	description: string;
};
export default function Pop(
	{ title, description }: PopProps,
	props: PopoverProps
): JSX.Element {
	return (
		<Popover {...props} placement="right-start" size="sm">
			<PopoverTrigger>
				<QuestionIcon />
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverHeader>{title}</PopoverHeader>
				<PopoverBody>{description}</PopoverBody>
			</PopoverContent>
		</Popover>
	);
}

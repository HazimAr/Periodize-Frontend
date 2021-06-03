import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	PopoverProps,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

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

import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
	ButtonGroup,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	IconButton,
	useEditableControls,
} from "@chakra-ui/react";
export default function CustomControlsExample() {
	/* Here's a custom control */
	function EditableControls() {
		const {
			isEditing,
			getSubmitButtonProps,
			getCancelButtonProps,
			getEditButtonProps,
		} = useEditableControls();

		return isEditing ? (
			<ButtonGroup justifyContent="center" size="sm">
				<IconButton
					aria-label="submit"
					icon={<CheckIcon />}
					{...getSubmitButtonProps()}
				/>
				<IconButton
					aria-label="submit"
					icon={<CloseIcon />}
					{...getCancelButtonProps()}
				/>
			</ButtonGroup>
		) : (
			<Flex justifyContent="center">
				<IconButton
					aria-label="edit"
					size="sm"
					icon={<EditIcon />}
					{...getEditButtonProps()}
				/>
			</Flex>
		);
	}

	return (
		<Editable
			textAlign="center"
			defaultValue="Rasengan ⚡️"
			fontSize="2xl"
			isPreviewFocusable={false}
		>
			<EditablePreview />
			<EditableInput />
			<EditableControls />
		</Editable>
	);
}

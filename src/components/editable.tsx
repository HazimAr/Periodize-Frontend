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
export default function CustomControlsExample({ title }: any) {
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
					aria-label="save"
					icon={<CheckIcon />}
					{...getSubmitButtonProps()}
				/>
				<IconButton
					aria-label="cancel"
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
			defaultValue={title}
			fontSize="2xl"
			isPreviewFocusable={false}
		>
			<EditablePreview />
			<EditableInput />
			<EditableControls />
		</Editable>
	);
}

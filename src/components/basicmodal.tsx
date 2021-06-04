import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	Button,
	useDisclosure,
	Text,
} from "@chakra-ui/react";

export default function CreateModal({ header, body }: any) {
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen}>{header}</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent p={4}>
					<Text>{body}</Text>
					<ModalCloseButton />
				</ModalContent>
			</Modal>
		</>
	);
}

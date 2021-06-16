import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	Button,
	useDisclosure,
} from "@chakra-ui/react";

export default function CreateModal({ header, children }: any) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen}>{header}</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					{children}
					<ModalCloseButton />
				</ModalContent>
			</Modal>
		</>
	);
}

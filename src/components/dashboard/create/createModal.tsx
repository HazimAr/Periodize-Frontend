import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	Button,
	useDisclosure,
} from "@chakra-ui/react";

import CreateFormModal from "@components/dashboard/create/createFormModal";

export default function CreateModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen}>Create Program</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent p={4}>
					<CreateFormModal />
					<ModalCloseButton />
				</ModalContent>
			</Modal>
		</>
	);
}

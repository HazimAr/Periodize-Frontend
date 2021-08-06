import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { deleteRecord } from "graphql/mutations";
import React, { ReactElement } from "react";
import { Record } from "../../API";
interface Props {
	record: Record;
	fetchMyLifts: any;
}

export default function deleteLiftModal({
	record,
	fetchMyLifts,
}: Props): ReactElement {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// const router = useRouter();

	async function obliderate() {
		try {
			const recordDetails = {
				id: record.id,
			};
			const deletedRecord = await API.graphql({
				query: deleteRecord,
				variables: { input: recordDetails },
				authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
			});

			console.log(deletedRecord);
			onClose();
			// router.push("/dashboard/lifts");
		} catch (error) {
			console.error("Error deleting lift: ", error);
		}
	}

	return (
		<>
			{/* <Button onClick={onOpen}>Delete</Button> */}
			<IconButton
				aria-label="delete lift"
				onClick={onOpen}
				size="sm"
				icon={<DeleteIcon />}
				_focus={{ outline: "none" }}
				variant="ghost"
				zIndex={100}
			/>
			<Modal onClose={onClose} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					{/* <ModalHeader>Delete history of {lift.name}?</ModalHeader> */}
					<ModalCloseButton />
					<ModalBody>
						<Box textAlign="left">
							Delete this record permanently?
						</Box>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="red"
							mr={3}
							onClick={() => obliderate()}
						>
							Delete
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

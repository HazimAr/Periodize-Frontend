import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { deleteLift } from "graphql/mutations";
import React, { ReactElement } from "react";
import { Lift } from "../../API";
interface Props {
	lift: Lift;
	fetchMyLifts: any;
}

export default function DeleteLiftModal({
	lift,
	fetchMyLifts,
}: Props): ReactElement {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// const router = useRouter();
	console.log(lift);

	async function obliderate() {
		try {
			const liftDetails = {
				id: lift.id,
			};
			const deletedLift = await API.graphql({
				query: deleteLift,
				variables: { input: liftDetails },
				authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
			});

			console.log(deletedLift);
			fetchMyLifts();
			onClose();
			// router.push("/dashboard/lifts");
		} catch (error) {
			console.error("Error deleting lift: ", error);
		}
	}

	return (
		<>
			<Button
				leftIcon={<DeleteIcon />}
				colorScheme="red"
				variant="outline"
				onClick={onOpen}
				size="sm"
				_focus={{ outline: "none" }}
			>
				Lift
			</Button>
			<Modal onClose={onClose} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Delete history of {lift.name}?</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box textAlign="left">
							Deleting is unrecoverable and will erase all your
							records for this lift
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

import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
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
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { Lift } from "../../API";
interface Props {
	lift: Lift;
}

export default function deleteLiftModal({ lift }: Props): ReactElement {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
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
			onClose();
			router.push("/dashboard/lifts");
		} catch (error) {
			console.error("Error deleting lift: ", error);
		}
	}

	return (
		<>
			<Button onClick={onOpen}>Delete</Button>
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

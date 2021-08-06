import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import CreateRecordSearchLiftModal from "@components/records/createRecordSearchLiftModal";
import { API } from "aws-amplify";
import React, { ReactElement, useState } from "react";
import { Lift, LiftsByUserQuery } from "../../API";
import { useUser } from "../../context/AuthContext";
import { liftsByUser } from "../../graphql/queries";
import CreateLiftModal from "./createLiftModal";
import LiftAccordion from "./liftAccordion";
export default function LiftsList(): ReactElement {
	const { user } = useUser();
	const [lifts, setLifts] = useState<Lift[]>([]);
	const [hasUser, setHasUser] = useState(false);

	const fetchMyLifts = async (): Promise<Lift[]> => {
		const myLifts = (await API.graphql({
			query: liftsByUser,
			variables: {
				owner: user.getUsername(),
			},
		})) as {
			data: LiftsByUserQuery;
			errors: any;
		};
		if (myLifts.data) {
			setLifts(myLifts.data.liftsByUser.items as Lift[]);
			return myLifts.data.liftsByUser.items as Lift[];
		} else {
			throw new Error("Could not get lifts");
		}
	};
	if (!user) {
		return <Box>Loading lifts...</Box>;
	}
	if (user && !hasUser) {
		fetchMyLifts();
		setHasUser(true);
	}

	console.log("current user: ", user);
	console.log("My lifts:", lifts);
	return (
		<Container maxW="container.md">
			<Flex align="center" justify="center">
				<Heading mr="16px">My Lifts</Heading>
				<CreateLiftModal lifts={lifts} setLifts={setLifts} />
				<CreateRecordSearchLiftModal
					lifts={lifts}
					fetchMyLifts={fetchMyLifts}
				/>
			</Flex>

			<Stack as="ul" spacing="4" my="4">
				<LiftAccordion
					lifts={lifts}
					setLifts={setLifts}
					fetchMyLifts={fetchMyLifts}
				/>
			</Stack>
		</Container>
	);
}

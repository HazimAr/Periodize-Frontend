import { Box } from "@chakra-ui/react";
import DashComponent from "@components/dashComponents/welcome";
import Top5Lifts from "@components/dashComponents/top5lifts";
import { useUser } from "@context/AuthContext";
import { Lift, LiftsByUserQuery } from "API";
import { API } from "aws-amplify";
import { liftsByUser } from "graphql/queries";
import React, { ReactElement, useState } from "react";
import Layout from "@components/dashboard/layout";

interface Props {}

export default function DashHome({}: Props): ReactElement {
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
		<Layout>
			<DashComponent lifts={lifts} />
			<Top5Lifts lifts={lifts} />
		</Layout>
	);
}

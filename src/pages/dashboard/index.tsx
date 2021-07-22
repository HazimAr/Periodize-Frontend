import { Box } from "@chakra-ui/react";
import Layout from "@components/dashboard/layout";
import MostRecentRecords from "@components/dashComponents/mostRecentRecords";
import Top5Lifts from "@components/dashComponents/top5lifts";
import Welcome from "@components/dashComponents/welcome";
import { useUser } from "@context/AuthContext";
import { Lift, LiftsByUserQuery, Record, RecordsByUserQuery } from "API";
import { API } from "aws-amplify";
import { liftsByUser, recordsByUser } from "graphql/queries";
import React, { ReactElement, useState } from "react";

export default function DashHome(): ReactElement {
	const { user } = useUser();
	const [lifts, setLifts] = useState<Lift[]>([]);
	const [hasUser, setHasUser] = useState(false);
	const [records, setRecords] = useState<Record[]>([]);

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

	const fetchMyRecords = async (): Promise<Record[]> => {
		const myRecords = (await API.graphql({
			query: recordsByUser,
			variables: {
				owner: user.getUsername(),
			},
		})) as {
			data: RecordsByUserQuery;
			errors: any;
		};
		if (myRecords.data) {
			setRecords(myRecords.data.recordsByUser.items as Record[]);
			return myRecords.data.recordsByUser.items as Record[];
		} else {
			throw new Error("Could not get records");
		}
	};

	if (user && !hasUser) {
		fetchMyLifts();
		fetchMyRecords();
		setHasUser(true);
	}

	console.log("Current user: ", user);
	console.log("My lifts:", lifts);
	console.log("My records:", records);
	return (
		<Layout>
			<Welcome />
			<Top5Lifts lifts={lifts} />
			<Box ml={10}>
				<MostRecentRecords records={records} />
			</Box>
		</Layout>
	);
}

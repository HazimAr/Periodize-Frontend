import { Box, HStack, Stack, VisuallyHidden } from "@chakra-ui/react";
import Layout from "@components/dashboard/layout";
import Charts from "@components/dashComponents/index/charts";
import Welcome from "@components/dashComponents/index/welcome";
import MostRecentRecords from "@components/dashComponents/mostRecentRecords";
import RecentRecordVolumes from "@components/dashComponents/recentRecordVolumes";
import GraphsForTopLift from "@components/dashComponents/index/graphsForTopLift";
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
		console.log(myLifts)
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
	//display dashboard UI ( check if user has lifts / records => show data)
	console.log(lifts)
	return (
		<Layout>
			<Stack w="100%">
				<VisuallyHidden>
					{/* put all your component classes that generate empty tags here */}
					<Welcome />
				</VisuallyHidden>

				{/* <Top5Lifts lifts={lifts} /> */}

				{records.length > 0 ? (
					<HStack>
						<MostRecentRecords records={records} />
						<RecentRecordVolumes records={records} />
					</HStack>
				) : null}
				
				{/* FIX {lifts?<GraphsForTopLift lifts={lifts}/>:null} */}

				<Charts />
			</Stack>
		</Layout>
	);
}

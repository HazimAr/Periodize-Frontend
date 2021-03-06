import { Container } from "@chakra-ui/react";
import { withSSRContext } from "aws-amplify";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { GetLiftQuery, Lift, ListLiftsQuery } from "../../../API";
import Layout from "../../../components/dashboard/layout";
import LiftComponent from "../../../components/lifts/individuallift";
import { getLift, listLifts } from "../../../graphql/queries";

interface Props {
	lift: Lift;
}
export default function IndividualLift({ lift }: Props): ReactElement {
	console.log(lift);
	return (
		<Layout>
			<Container maxW={{base:"100vw"}}>
				<LiftComponent lift={lift} />
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const SSR = withSSRContext();
	const liftsQuery = (await SSR.API.graphql({
		query: getLift,
		variables: {
			id: params.id,
		},
	})) as { data: GetLiftQuery };

	return {
		props: {
			lift: liftsQuery.data.getLift as Lift,
		},
		revalidate: 10,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const SSR = withSSRContext();
	const response = (await SSR.API.graphql({ query: listLifts })) as {
		data: ListLiftsQuery;
		errors: any[];
	};
	const paths = response.data.listLifts.items.map((lift) => ({
		params: { id: lift.id },
	}));

	return { paths, fallback: "blocking" };
};

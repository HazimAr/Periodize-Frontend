import CreateForm from "@components/dashboard/createform";
import Layout from "@components/dashboard/layout";
import React from "react";

export default function index(): JSX.Element {
	return (
		<Layout>
			<CreateForm />
		</Layout>
	);
}

import React from "react";
import Layout from "@components/dashboard/layout";
import CreateForm from "@components/dashboard/createform";
export default function index(): JSX.Element {
	return (
		<Layout>
			<CreateForm />
		</Layout>
	);
}

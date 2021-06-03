import CreateForm from "@components/dashboard/create/createform";
import Layout from "@components/dashboard/layout";

export default function index(): JSX.Element {
	return (
		<Layout>
			<CreateForm />
		</Layout>
	);
}

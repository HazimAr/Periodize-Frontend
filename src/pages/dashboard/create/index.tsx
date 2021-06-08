import Layout from "@components/dashboard/layout";
import CreateModal from "@components/dashboard/create/createModal";
import CreateBasic from "@components/dashboard/create/createBasicActivity";
export default function index(): JSX.Element {
	return (
		<Layout>
			<CreateModal />
			<CreateBasic />
		</Layout>
	);
}

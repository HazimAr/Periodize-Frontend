import Layout from "@components/dashboard/layout";
import CreateModal from "@components/dashboard/create/createModal";
export default function index(): JSX.Element {
	return (
		<Layout>
			<CreateModal />
		</Layout>
	);
}

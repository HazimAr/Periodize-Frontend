import Layout from "@components/dashboard/layout";
import PageLayout from "@components/dashboard/pageLayout";
import MyPrograms from "@components/dashboard/programs/myprograms";
export default function MyProgramsPage(): JSX.Element {
	return (
		<Layout>
			<PageLayout>
				<MyPrograms />
			</PageLayout>
		</Layout>
	);
}

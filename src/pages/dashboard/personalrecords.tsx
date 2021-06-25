import Layout from "@components/dashboard/layout";
import PageLayout from "@components/dashboard/pageLayout";
// import MyPrograms from "@components/dashboard/programs/myprograms";
import PRList from "@components/dashboard/personalrecords/addprform";
export default function MyProgramsPage(): JSX.Element {
	return (
		<Layout>
			<PageLayout>
				<PRList />
			</PageLayout>
		</Layout>
	);
}

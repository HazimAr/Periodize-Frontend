import { getProgram, getPrograms } from "@api/program";
import {  Heading } from "@chakra-ui/react";
// import Editable from "@components/editable";
import Layout from "@components/dashboard/layout";
// import { GetStaticPaths } from "next";

export default function Program({ program }: any): JSX.Element {
	// const router = useRouter();
	// const { pid } = router.query;

	// useEffect(() => {}, []);
	return (
		<Layout>
			<Heading>My Program (will be program name) </Heading>
			{program.experience}
			{/* <Editable title="hello" /> */}
		</Layout>
	);
}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const res = await getPrograms();
	const programs = await res.data;

	// Get the paths we want to pre-render based on posts
	const paths = programs.map((program: any) => ({
		params: { id: program.id },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const res = await getProgram(params.id);
	const program = await res.data;

	// Pass post data to the page via props
	return { props: { program } };
}

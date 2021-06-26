import styled from "styled-components";
import Layout from "./layout";

const Content = styled.section`
	width: 90%;
	max-width: 750px;
	margin: auto;
	font-size: 20px;
	letter-spacing: -0.003em;
	line-height: 1.6;
	font-style: normal;
	word-break: break-word;
	text-align: left;
`;
// eslint-disable-next-line import/no-default-export
export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<Layout>
			<Content>{children}</Content>
		</Layout>
	);
}

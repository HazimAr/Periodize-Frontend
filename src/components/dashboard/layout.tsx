/* eslint-disable no-void */
import { getProfileData } from "@api/profile";
import { Flex } from "@chakra-ui/react";
import { MobileTopBar } from "@components/dash2/mobiletopbar";
import { Sidebar } from "@components/dash2/sidebar";
import { getCookie } from "@lib/cookie";
import axios from "axios";
import { DB_URL } from "config";
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-default-export
export default function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	useEffect(() => {
		const sess = getCookie("sessionid");
		if (!sess) {
			window.location.href = "/login";
			return;
		}
		getProfileData().then((data) => {
			if (!data.data) {
				window.location.href = "/login";
				return;
			}
		});
	}, []);
	return (
		<main id="main">
			<Flex h="100vh" flexDirection="column" position="fixed" w="100%">
				<MobileTopBar />
				<Flex flex="1">
					<Sidebar display={{ base: "none", md: "flex" }} />
					{/* <Center w="100%">{children}</Center>
					 */}

					{children}
				</Flex>
			</Flex>
		</main>
	);
}

export async function getServerSideProps({ req, res }: any): Promise<any> {
	const sessionid = req.cookies.sessionid;
	if (!sessionid) {
		res.writeHead(307, {
			Location: "login",
		});
		res.end();
		return { props: {} };
	}

	const sendData = {
		sessionid,
	};

	const { data } = await axios.post(`${DB_URL}/users/me`, sendData);

	if (!data.data) {
		res.writeHead(307, {
			Location: "login",
		});
		res.end();
		return { props: {} };
	}

	return { props: { user: data.data } };
}

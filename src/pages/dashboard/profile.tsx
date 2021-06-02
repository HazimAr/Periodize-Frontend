import React, { useEffect, useState } from "react";
import Layout from "@components/dashboard/layout";
import AvatarBadge from "@components/avatar";
import { Flex, Text } from "@chakra-ui/react";
import { getCookie } from "@lib/cookie";
import { getProfileData } from "@api/profile";

export default function index(): JSX.Element {
	const [user, setUser]: any = useState();
	useEffect(() => {
		const sess = getCookie("sessionid");
		if (sess) {
			getProfileData().then((data) => {
				if (data.code == 200) {
					setUser(data.data);
				}
			});
		}
	}, []);
	return (
		<Layout>
			{/* {user ? (
				// <AvatarBadge
				// 	name={user.username}
				// 	src={user.image ? user.image : "https://bit.ly/broken-link"}
				// 	size="2xl"
				// />
				<Text>loading</Text>
			) : (
				<Text>loading</Text>
			)} */}
		</Layout>
	);
}

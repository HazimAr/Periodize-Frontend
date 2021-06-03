/* eslint-disable no-void */
import { getProfileData } from "@api/profile";
import { getCookie } from "@lib/cookie";
import React, { useEffect } from "react";
import styled from "styled-components";

import Nav from "./nav";

const Content = styled.div``;

const Main = styled.main``;
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
		<Main id="main">
			<Nav />
			<Content>{children}</Content>
		</Main>
	);
}

/* eslint-disable unicorn/no-useless-undefined */
/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-void */
/* eslint-disable import/no-default-export */
import { getProfileData } from "@api/profile";
import { getCookie } from "@lib/cookie";
import { useEffect, useState } from "react";

export default function useProfile(): any {
	const [user, setUser]: any = useState();

	useEffect(() => {
		const sess = getCookie("sessionid");
		if (sess) {
			void getProfileData().then((data) => {
				if (data.code === 200) {
					setUser(data.data);
					return;
				}
				setUser(null);
			});
			return;
		}
		setUser(null);
	}, []);

	return user;
}

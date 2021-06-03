import { getProfileData } from "@api/profile";
import { getCookie } from "@lib/cookie";
import { useEffect, useState } from "react";

export default function useProfile() {
	const [user, setUser]: any = useState();
	useEffect(() => {
		const sess = getCookie("sessionid");
		console.log(sess);
		if (sess) {
			getProfileData().then((data) => {
				if (data.code == 200) {
					setUser(data.data);
				}
			});
		}

		return user;
	}, []);
	useEffect(() => {
		if (user) {
			console.log(user);
		}
	}, [user]);
}

import { ListItem, UnorderedList } from "@chakra-ui/react";
import { getProfileData } from "@api/profile";
import { useState, useEffect } from "react";
// export default function ProgramList(): JSX.Element {
// 	const [user, setUser] = useState();

// 	useEffect(() => {
// 		getProfileData().then((user) => {
// 			setUser(user.data);
// 		});
// 	}, []);

// 	useEffect(() => {
// 		console.log(user);
// 	}, [user]);

// 	return (
// 		<UnorderedList m="0px" p="0px" variant="none">
// 			<ListItem>{user?.email}</ListItem>
// 		</UnorderedList>
// 	);
// }

export default function ProgramList(): JSX.Element {


	return (
		<UnorderedList m="0px" p="0px" variant="none">
			<ListItem>{" "}</ListItem>
		</UnorderedList>
	);
}
// const friends = [
// 	{ name: "hazim", hobbies: "bike" },
// 	{ name: "lilan", hobbies: "programming" },
// 	{ name: "tendon", hobbies: "knitting" },
// 	{ name: "noodle", hobbies: "programming" },
// 	{ name: "noa", hobbies: "run" },
// ];

// {
// 	friends.map((friend) => {
// 		return (
// 			<ListItem my="50px" key={friend.name}>
// 				Hi, my name is{" "}
// 				{friend.name.search("o") !== -1 ? "i like oreo's" : friend.name}
// 				. I like {friend.hobbies.length > 4 ? "boring" : friend.hobbies}
// 				.{friend.name.includes("o") ? "i like oreo's" : friend.name}
// 			</ListItem>
// 		);
// 	});
// }

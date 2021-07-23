import { useToast } from "@chakra-ui/react";
import { useUser } from "@context/AuthContext";
import { getCookie, setCookie } from "@lib/cookie";

export default function welcome(): JSX.Element {
	const toast = useToast();
	const { user } = useUser();
	toast({
		title: "Welcome Back",
		description: `Welcome back ${user.getUsername()}`,
		duration: 5000,
		isClosable: true,
	});
	if (typeof window !== "undefined") {
		if (!getCookie("welcome")) {
			toast({
				title: "Welcome Back",
				description: `Welcome back ${user.getUsername()}`,
				duration: 5000,
				isClosable: true,
			});

			setCookie("welcome", "done", 1);
		}
	}

	return <></>;
}

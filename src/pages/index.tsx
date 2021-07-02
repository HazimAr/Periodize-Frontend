// import Link from "@components/link";
import { Box } from "@chakra-ui/react";
import { FeatureComponent } from "@components/featureboxes";
import HomeVideo from "@components/homevideo";
// import HeadFoot from "@components/home/headfoot";

export default function Home(): JSX.Element {
	return (
		// <HeadFoot>
		<>
			<HomeVideo />
			<Box h="100vh" />
			<FeatureComponent />
		</>
		// </HeadFoot>
	);
}

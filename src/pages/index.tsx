// import Link from "@components/link";
import { Box } from "@chakra-ui/react";
import { FeatureComponent } from "@components/featureboxes";
import HomeVideo from "@components/homevideo";
import HomeVideoComponent from "@components/homevideocomponent";
// import HeadFoot from "@components/home/headfoot";

export default function Home(): JSX.Element {
	return (
		// <HeadFoot>
		<>
			<HomeVideo />
			
			<FeatureComponent />

			<HomeVideoComponent />
		</>
		// </HeadFoot>
	);
}

// import Link from "@components/link";
import { Box } from "@chakra-ui/react";
import { FeatureComponent } from "@components/featureboxes";
import HomeVideo from "@components/homevideo";
import HomeVideoComponent from "@components/homevideocomponent";
// import HeadFoot from "@components/home/headfoot";
import CreateRecordForm from "@components/dashboard/lifts/createrecordform";
import CreateRecordFormModal from "@components/dashboard/lifts/createrecordformmodal"

export default function Home(): JSX.Element {
	return (
		// <HeadFoot>
		<>
			<HomeVideo />

			<FeatureComponent />

			<HomeVideoComponent />

			<CreateRecordForm />

			<CreateRecordFormModal />

		</>
		// </HeadFoot>
	);
}

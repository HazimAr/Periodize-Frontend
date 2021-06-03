// import StaffCard from "@components/about/staffcard";
// import Container from "@components/container";
import Foot from "@components/home/foot";
import Head from "@components/home/head";

export default function About(): JSX.Element {
	// const staff = [
	// 	{
	// 		src: "/zuck.jpg",
	// 		name: "Adam",
	// 		github: "https://github.com/adamrajch",
	// 		sub: "Fullstack dev specialized in smoke detectors",
	// 		portfolio: "google.com",
	// 		linkedIn: "https://www.linkedin.com/in/hazim-arafa-a439aa205/",
	// 		para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae efficitur mauris. Phasellus sed iaculis lectus, sed malesuada erat. Aenean blandit, dolor at pretium varius, risus orci placerat tortor, vel rhoncus eros metus ac neque. Cras purus mi, consectetur pharetra nunc sit amet, consequat auctor risus. Pellentesque sit amet vestibulum augue, eget porttitor lacus. Praesent ex mi, aliquet ac tortor at, accumsan dictum leo. Nullam tellus nunc, condimentum et congue ut, tristique vel eros.",
	// 	},
	// 	{
	// 		src: "/Hazim.png",
	// 		name: "Hazim",
	// 		github: "https://github.com/hazimar",
	// 		sub: "Fullstack dev specialized in smoke detectors",
	// 		portfolio: "google.com",
	// 		linkedIn: "https://www.linkedin.com/in/hazim-arafa-a439aa205/",
	// 		para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae efficitur mauris. Phasellus sed iaculis lectus, sed malesuada erat. Aenean blandit, dolor at pretium varius, risus orci placerat tortor, vel rhoncus eros metus ac neque. Cras purus mi, consectetur pharetra nunc sit amet, consequat auctor risus. Pellentesque sit amet vestibulum augue, eget porttitor lacus. Praesent ex mi, aliquet ac tortor at, accumsan dictum leo. Nullam tellus nunc, condimentum et congue ut, tristique vel eros.",
	// 	},
	// 	{
	// 		src: "/ai.jpg",
	// 		name: "Ai",
	// 		github: "https://github.com/Lilin7534",
	// 		sub: "Math grad dropout",
	// 		portfolio: "https://ko-fi.com/lilinai",
	// 		linkedIn: "google.com",
	// 		para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae efficitur mauris. Phasellus sed iaculis lectus, sed malesuada erat. Aenean blandit, dolor at pretium varius, risus orci placerat tortor, vel rhoncus eros metus ac neque. Cras purus mi, consectetur pharetra nunc sit amet, consequat auctor risus. Pellentesque sit amet vestibulum augue, eget porttitor lacus. Praesent ex mi, aliquet ac tortor at, accumsan dictum leo. Nullam tellus nunc, condimentum et congue ut, tristique vel eros.",
	// 	}
	// ];
	return (
		<>
			<Head />
			{/* <Container>
				{staff.map((p) => {
					return (
						<StaffCard
							src={p.src}
							name={p.name}
							github={p.github}
							sub={p.sub}
							portfolio={p.portfolio}
							para={p.para}
							linkedIn={p.linkedIn}
							key={p.name}
						/>
					);
				})}
			</Container> */}
			<Foot />
		</>
	);
}

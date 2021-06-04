// import StaffCard from "@components/about/staffcard";
// import Container from "@components/container";
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
/* 
	<Container>
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
	</Container> 
	*/

import Foot from "@components/home/foot";
import Head from "@components/home/head";
import { Text, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";

import useInterval from "@hooks/useInterval";

export default function About(): JSX.Element {
	const [count, setCount] = useState(0);
	const [farms, setFarms] = useState(0);
	const [boats, setBoats] = useState(0);
	const [helicopters, setHelicopters] = useState(0);
	const [income, setIncome] = useState(0);
	const [compound, setCompound] = useState(false);

	// Game Loop
	useInterval(() => {
		if (compound) {
			let intrest = count / 1000;
			setCount(
				Math.ceil(
					intrest +
						(count + 1 * farms + 10 * boats + 100 * helicopters) *
							100
				) / 100
			);

			setIncome(
				Math.ceil(
					intrest + (1 * farms + 10 * boats + 100 * helicopters) * 100
				) / 100
			);
			return;
		}

		setCount(count + 1 * farms + 10 * boats + 100 * helicopters);
		setIncome(10 * (1 * farms + 10 * boats + 100 * helicopters));
	}, 100);

	return (
		<>
			<Head />

			<Text>${count}</Text>
			<Text>Farms: {farms}</Text>
			<Text>Boats: {boats}</Text>
			<Text>Helicopters: {helicopters}</Text>
			<Text>${income} / sec</Text>
			<Text>Compound: {compound ? "True" : "False"}</Text>
			<Button
				onClick={() => {
					console.log("Increase");
					setCount(count + 1);
				}}
			>
				Increase
			</Button>
			<Flex justify="center">
				<Button
					onClick={() => {
						if (count >= 100) {
							console.log("Buying Farm");
							setFarms(farms + 1);
							setCount(count - 100);
						} else {
							console.log("Insufficient Funds");
						}
					}}
				>
					Buy Farm ($100)
				</Button>

				<Button
					onClick={() => {
						if (count >= 1000) {
							console.log("Buying Boats");
							setBoats(boats + 1);
							setCount(count - 1000);
						} else {
							console.log("Insufficient Funds");
						}
					}}
				>
					Buy Boats ($1,000)
				</Button>

				<Button
					onClick={() => {
						if (count >= 10000) {
							console.log("Buying Helicopter");
							setHelicopters(helicopters + 1);
							setCount(count - 10000);
						} else {
							console.log("Insufficient Funds");
						}
					}}
				>
					Buy Helicopters ($10,000)
				</Button>
			</Flex>
			<Button
				onClick={() => {
					if (count >= 10000 && !compound) {
						console.log("Buying Compound");
						setCompound(true);
						setCount(count - 10000);
					} else {
						console.log("Insufficient Funds");
					}
				}}
			>
				Buy Compound Intrest ($10,000)
			</Button>

			{/* <Flex
				bg="blue"
				h="500px"
				justify="space-between"
				align="center"
				direction="column"
				color="black"
			>
				<Text>Hello Im Text</Text>
				<Flex
					bg="red"
					w="200px"
					h="200px"
					align="center"
					justify="center"
				>
					<Text>This is the Flex</Text>
				</Flex>
				<Flex
					bg="yellow"
					w="200px"
					h="200px"
					align="center"
					justify="center"
				>
					<Text>This is the Flex</Text>
				</Flex>
				<Flex
					bg="green"
					w="200px"
					h="200px"
					align="center"
					justify="center"
				>
					<Text>This is the Flex</Text>
				</Flex>
				
			</Flex> */}

			<Foot />
		</>
	);
}

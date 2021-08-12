import {Box, Heading, Container, Stack, Button, Center} from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<Container bg="#08021D" overflowY="scroll" style={{scrollSnapType: "y mandatory"}} height="100vh" maxWidth="100%">
				
				<Box style={{scrollSnapAlign: "start"}} height="100vh" >
					<Stack spacing={4} margin="20px">
						<Heading size="4xl">
							Plan
						</Heading>
						<Heading size="4xl">
							Train
						</Heading>
						<Heading size="4xl">
							Record
						</Heading>
						<Center>
							<Button width="100px" bg="#15054D">
								Button
							</Button> 
						</Center>
					</Stack>
				</Box>
				
				<Box style={{scrollSnapAlign: "start"}} height="100vh" >
					<Heading size="2xl" margin="20px">
						Why Us?
					</Heading>
				</Box>

				<Box style={{scrollSnapAlign: "start"}} height="100vh" >
					<Heading size="sm" margin="20px">
					Still not sure? Take a look at what some of our users have said.
					</Heading>
				</Box>
				
			</Container>
		</>
	);
}

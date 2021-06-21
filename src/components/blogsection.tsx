import {Box, Text} from "@chakra-ui/react";

export default function BlogSection({ arr }: any): JSX.Element {
	return (
			<Box>
				{arr.map((sect: any) => (
					<Box
						pb="20px"
						borderRadius="10px"
						w="100%"
						key={sect.header}
					>
						<Text color="#f3b6d8eb" align="left" fontSize="15px">
							{sect.header}
						</Text>
						<Text color="white" align="left" fontSize="13px">
							{sect.para}
						</Text>
					</Box>
				))}
			</Box>
	);
}

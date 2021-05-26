import styled from "styled-components";
import Link from "next/link";
import { StyledButton } from "@styles/index.theme";
import { Container } from "next/app";

const Header = styled.header`
	position: fixed;
	width: 100%;
	background: black;
	
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

const HeaderInside = styled(Container)`
	max-width: 1200px;
	width: 100%;
	padding: 5px 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
`;

const Nav = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	li {
		float: left;
		margin: 0 10px;
		color: #cccccc;
		:hover {
			color: white;
		}
	}
	button {
		margin-left: 20px;
	}
	font-size: 16px;
	@media (max-width: 700px) {
		display: none;
	}
`;
// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Header>
			<HeaderInside>
				<Link href="/">
					<a>
						<h2>Revival</h2>
					</a>
				</Link>
				<Nav>
					<ul>
						<li>
							<Link href="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link href="/faq">FAQ</Link>
						</li>
						<li>
							<Link href="/discord">Discord</Link>
						</li>
						<li>
							<Link href="/key">Key</Link>
						</li>
						<li>
							<Link href="/login">Login</Link>
						</li>
					</ul>
					<StyledButton>Download Now</StyledButton>
				</Nav>
			</HeaderInside>
		</Header>
	);
}

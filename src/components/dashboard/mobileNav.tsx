import { FiMenu } from "react-icons/fi";
import styled from "styled-components";

const MobileNav = styled.nav`
	display: none;
	@media only screen and (max-width: 600px) {
		margin-top: 15px;
		display: flex;
		position: fixed;
		align-items: center;
		flex-direction: column;
		left: 0;
		top: 0;
		height: 100vh;
		width: 5rem;
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Cards(): JSX.Element {
	// const [isOpen , setIsOpen] = useState()
	// function mobileToggle() {

	// }

	return (
		<MobileNav>
			<button
				type="button"
				aria-label="mobile menu"
				// onClick={mobileToggle}
			>
				<FiMenu size="40px" />
			</button>
		</MobileNav>
	);
}

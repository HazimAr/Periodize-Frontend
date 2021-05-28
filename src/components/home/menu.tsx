import { useState } from "react";
import styled from "styled-components";

const width = "40px";
const height = "4px";
const color = "var(--secondary)";
const StyledMenu = styled.div`
	width: ${width};
	height: ${height};
	background: ${color};
	border-radius: 5px;
	position: absolute;
	transition: all 0.5s ease-in-out;
	z-index: 100;
	&::before,
	&::after {
		z-index: 100;
		content: "";
		left: 0;
		position: absolute;
		width: ${width};
		height: ${height};
		background: ${color};
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
		transform: translateY(-16px);
	}
	&::before {
		transform: translateY(-16px);
	}
	&::after {
		transform: translateY(16px);
	}
`;
export function setHeader(bool: boolean): void {
	const ele: HTMLElement | null = document.querySelector("#drop-menu");
	const menus: NodeListOf<Element> | null = document.querySelectorAll(
		".open"
	);
	const time = "0.3s";
	if (bool && ele !== null) {
		ele.style.animation = `dropin ${time} forwards`;
	} else if (ele !== null) {
		ele.style.animation = `dropout ${time} forwards`;
		if (menus !== null) {
			// eslint-disable-next-line @typescript-eslint/prefer-for-of
			for (let i = 0; i < menus.length; i++) {
				menus[i].classList.remove("open");
			}
		}
	}
}
const StyledButton = styled.button`
	position: relative;
	top: 5px;
	right: 20px;
	height: 40px;
	width: 40px;
	display: none;
	margin-left: auto;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 700px) {
		display: block;
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Menu(): JSX.Element {
	const [isAnimated, setIsAnimated] = useState(false);
	return (
		<StyledButton
			className={isAnimated ? "open" : ""}
			onClick={() => {
				setIsAnimated(!isAnimated);
				setHeader(!isAnimated);
			}}
			aria-label="Menu Dropdown"
			type="button"
		>
			<StyledMenu />
		</StyledButton>
	);
}

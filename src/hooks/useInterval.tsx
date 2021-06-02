import { useEffect, useRef } from "react";

export default function useInterval(
	callback: any,
	delay: number | null | undefined
) {
	const savedCallback: any = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		if (delay !== null) {
			let id = setInterval(() => savedCallback.current(), delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

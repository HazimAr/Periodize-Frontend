import { useEffect, useRef } from "react";

export default function useInterval(callback: any, delay: number) {
	const savedCallback: any = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		if (delay) {
			let id = setInterval(() => savedCallback.current(), delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

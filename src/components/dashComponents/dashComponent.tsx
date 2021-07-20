import { Lift } from "API";



interface Props {
	lifts: Lift[];
}

export default function dashComponent({lifts}: Props): JSX.Element {
    console.log("From my component:", lifts);
    return (
        <div>
            Hello
        </div>
    )
}

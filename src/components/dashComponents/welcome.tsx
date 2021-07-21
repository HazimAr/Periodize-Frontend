import { Lift } from "API";

import {useToast,} from "@chakra-ui/react";
import { useUser } from "@context/AuthContext";



interface Props {
	lifts: Lift[];
}

export default function dashComponent({lifts}: Props): JSX.Element {
    console.log("From my component:", lifts);
    const toast = useToast();
    const { user } = useUser();
    toast({
        title: "Welcome Back",
        description: `Welcome back ${user.getUsername()}`,
        duration: 5000,
        isClosable: true,
    })

    return(
        <>
        </>
    )
}
            
    


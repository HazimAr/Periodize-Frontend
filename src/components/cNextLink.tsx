import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function CLink({ href, name, ...props }: any): JSX.Element {
  return (
    <Link as={NextLink} href={href} {...props}>
      {name}
    </Link>
  );
}

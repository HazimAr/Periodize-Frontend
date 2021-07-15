import { Checkbox } from "@chakra-ui/react";

export default function FormikCheckBox(props: any) {
  return (
    <Checkbox
      onBlur={props.form.handleBlur}
      onChange={props.form.handleChange}
      value={props.field.value}
      name={props.field.name}
    >
      {props.part.label}
      {props.part.e}
    </Checkbox>
  );
}

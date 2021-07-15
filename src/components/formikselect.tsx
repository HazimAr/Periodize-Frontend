import { Select } from "@chakra-ui/react";

export default function FormikSelect(props: any) {
  return (
    <Select
      name={props.field.name}
      value={props.field.value}
      onChange={props.form.handleChange}
      onBlur={props.form.handleBlur}
    >
      {props.choices.map((val) => {
        return (
          <option value={val} key={val}>
            {val}
          </option>
        );
      })}
    </Select>
  );
}

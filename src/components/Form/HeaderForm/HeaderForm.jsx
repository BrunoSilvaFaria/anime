import { React } from "react";
import { FormHeader } from "./styles";

export default function HeaderForm(props) {
  return (
      <FormHeader>{props.title}</FormHeader>
    );
  }

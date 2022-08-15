import React from "react";
import { Input } from "./Styles";

function Result(props) {
  return (
    <Input
      placeholder={props.placeholder}
      onChange={props.handleChange}
      type="number"
      value={props.value}
    >
    </Input>
  );
}

export default Result;

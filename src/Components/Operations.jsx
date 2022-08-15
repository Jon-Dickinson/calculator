import React from "react";
import { Button, ButtonColumn } from "./Styles";

function Operations(props) {
  return (
    <ButtonColumn>
      <Button className="bg-f50057" onClick={props.handleSum}>+</Button>
      <Button className="bg-f50057" onClick={props.handleSub}>-</Button>
      <Button className="bg-f50057" onClick={props.handleMul}>*</Button>
      <Button className="bg-f50057" onClick={props.handleDiv}>/</Button>
    </ButtonColumn>
  );
}

export default Operations;

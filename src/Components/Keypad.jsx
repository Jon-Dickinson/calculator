import React from "react";
import { Button, ButtonRow, Wrapper } from "./Styles";

function Row(i, props) {
  return (
    <ButtonRow>
      <Button 
        className="bg-304ffe" 
        value={i} 
        onClick={props.handleIncrement}>
        {i}
      </Button>
      <Button
        className="bg-304ffe"
        value={i + 1}
        onClick={props.handleIncrement}
      >
        {i + 1}
      </Button>
      <Button
        className="bg-304ffe"
        value={i + 2}
        onClick={props.handleIncrement}
      >
        {i + 2}
      </Button>
    </ButtonRow>
  );
}

function Keypad(props) {
  return (
    <Wrapper>
      {Row(1, props)}
      {Row(4, props)}
      {Row(7, props)}

      <ButtonRow>
        <Button className="bg-00c853" onClick={props.handleReset}>
          C
        </Button>
        <Button className="bg-304ffe" value="0" onClick={props.handleIncrement}>
          0
        </Button>
        <Button className="bg-00c853" onClick={props.handleCalc}>
          =
        </Button>
      </ButtonRow>
    </Wrapper>
  );
}

export default Keypad;

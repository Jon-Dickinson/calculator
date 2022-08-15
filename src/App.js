import React, { useState } from "react";
import styled from "@emotion/styled";
import Keypad from "./Components/Keypad";
import Operations from "./Components/Operations";
import Result from "./Components/Result";

export const Calculator = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 280px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #708690;
`;

function App() {
  let [value, setValue] = useState("");
  let [placeholder, setPlaceholder] = useState(0);
  let [result, setResult] = useState(0);

  return (
    <div className="if__base-wrapper direction--column align--center justify--center">
      <Calculator>
        <Result
          value={value}
          placeholder={placeholder}
          handleChange={(e) => {
            setValue((value = e.target.value));
          }}
        ></Result>
        <div className="row">
          <Keypad
            handleIncrement={(e) => {
              setValue((value = value + e.target.value));
            }}
            handleCalc={(e) => {
              setResult((result = result + parseInt(value)));
              setValue((value = result));
            }}
            handleReset={(e) => {
              setValue((value = ""));
              setResult((result = 0));
              setPlaceholder((placeholder = 0));
            }}
          ></Keypad>
          <div className="column">
            <Operations
              handleSum={(e) => {
                setResult((result = result + parseInt(value)));
                setPlaceholder((placeholder = result + "+"));
                setValue((value = ""));
              }}
              handleSub={(e) => {
                setResult((result = result - parseInt(value)));
                setPlaceholder((placeholder = result + "-"));
                setValue((value = ""));
              }}
              handleMul={(e) => {
                setResult((result = result * parseInt(value)));
                setPlaceholder((placeholder = result + "*"));
                setValue((value = ""));
              }}
              handleDiv={(e) => {
                setResult((result = result / parseInt(value)));
                setPlaceholder((placeholder = result + "/"));
                setValue((value = ""));
              }}
            ></Operations>
          </div>
        </div>
      </Calculator>
    </div>
  );
}

export default App;

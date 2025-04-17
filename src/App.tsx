import React, { useState } from "react";
import Circle from "./Circle";
import styled from "styled-components";

const ThemeBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 4px;
  & button {
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
function App() {
  const [value, setValue] = useState("");

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setValue(value);
  }
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValue("");
  }
  /*
  input의 event에 type할 떈 React.FormEvent<HTMLInputElement>  #3.5
  form event에 type할 떈 React.FormEvent<HTMLFormElement>  #3.5
  */

  return (
    <>
      <Circle backgroundColor="teal" />
      <Circle backgroundColor="tomato" borderColor="yellow" text="토마토동그라미" />
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} />
      </form>
      <ThemeBox>
        <span>themeBox</span>
        <button>btn</button>
      </ThemeBox>
    </>
  );
}

export default App;

/* 
📍 JSX
 */

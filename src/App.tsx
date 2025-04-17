import React, { useState } from "react";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("");

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setValue(value);
  }
  /*
  input의 event에 type할 떈 React.FormEvent<HTMLInputElement>  #3.5
  */
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValue("");
  }
  /*
  form event에 type할 떈 React.FormEvent<HTMLFormElement>  #3.5
  */
  return (
    <>
      <Circle backgroundColor="teal" />
      <Circle backgroundColor="tomato" borderColor="yellow" text="토마토동그라미" />
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} />
      </form>
    </>
  );
}

export default App;

/* 
📍 JSX
 */

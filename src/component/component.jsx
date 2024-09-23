import React, { useState } from "react";

const Component = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>number : {counter} </h1>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </>
  );
};
export default Component;

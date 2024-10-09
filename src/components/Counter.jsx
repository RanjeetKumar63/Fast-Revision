import React, { useState } from "react";

const counter = () => {
  const [count, setCount] = useState(0);
  const clickhandler = () => {
    setCount(count + 1);
  };
  return (
    <div className="count">
      <h1>You clicked {count} times </h1>
      <button onClick={clickhandler}>Click</button>
    </div>
  );
};

export default counter;

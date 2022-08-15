import React, { useState } from "react";

const ExampleFunctional = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "test",
    age: 12,
  });

  const handleClick = () => {
    setCount((preState) => {
      return preState + 1;
    });
    setCount((preState) => {
      return preState + 1;
    });

    setUser({ name: "updated" });
  };
  return (
    <div>
      <pre>Functional Component</pre>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default ExampleFunctional;

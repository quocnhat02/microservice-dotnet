import React, { useState } from "react";

const orders = [100, 200, 300];

function App() {
  const [counter, setCounter] = useState(() => {
    let total = orders.reduce((total, cur) => total + cur);
    console.log(total);
    return total;
  });
  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Click</button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
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

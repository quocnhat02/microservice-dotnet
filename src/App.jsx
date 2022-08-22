import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App" style={{ padding: 30 }}>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;

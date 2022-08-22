import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You changed the counter to" + counter);
  }, [counter]);

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

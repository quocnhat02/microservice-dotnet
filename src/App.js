import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  console.log(name);
  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App" style={{ padding: 30 }}>
      <input type="text" value={name} onChange={handleInput} />
      <button onClick={() => setName("Nguyen Van bbb")}>Change</button>
    </div>
  );
}

export default App;

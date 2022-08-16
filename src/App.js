import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App" style={{ padding: 30 }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("Nguyen Van B")}>Change</button>
    </div>
  );
}

export default App;

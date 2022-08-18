import React, { useState } from "react";

const RAM = ["8 GB", "16 GB", "32 GB"];

function App() {
  const [ram, setRam] = useState(RAM[0]);

  const handleRAM = () => {
    setRam(() => {
      let index = Math.floor(Math.random() * RAM.length);
      console.log(RAM[index]);
      return RAM[index];
    });
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      <h1>{ram}</h1>
      <button onClick={handleRAM}>Get</button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const orders = [100, 200, 300];

function App() {
  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi, VN",
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Yeu dong vat",
    });
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;

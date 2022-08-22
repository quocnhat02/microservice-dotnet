import React, { useState } from "react";

const App = () => {
  const name = "John";
  const isNameShowing = false;

  return (
    <div className="App" style={{ padding: 30 }}>
      <h1>Hello, {isNameShowing ? name : "someone"}</h1>
    </div>
  );
};

export default App;

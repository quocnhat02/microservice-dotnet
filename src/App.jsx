import React, { useState } from "react";

const Person = ({ firstName, lastName, age }) => {
  return (
    <>
      <h1>FistName: {firstName}</h1>
      <h1>LastName: {lastName}</h1>
      <h1>Age: {age}</h1>
    </>
  );
};

const App = () => {
  return (
    <div className="App" style={{ padding: 30 }}>
      <Person firstName="Nhat" lastName="Nguyen" age="20" />
      <Person firstName="Thuan" lastName="Trieu" age="21" />
      <Person firstName="Dai" lastName="Trieu" age="22" />
    </div>
  );
};

export default App;

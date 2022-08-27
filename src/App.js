import React, { Fragment } from "react";
import CardList from "./CardList";
import { robots } from "./robots";

const App = () => {
  return (
    <Fragment>
      <CardList robots={robots} />
    </Fragment>
  );
};

export default App;

import React, { Fragment } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <Fragment>
      <h1>Robot Friends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </Fragment>
  );
};

export default App;

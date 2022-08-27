import React, { Fragment } from "react";
import Card from "./Card";
import { robots } from "./robots";

const CardList = () => (
  <Fragment>
    {robots.map(({ id, name, email }) => (
      <Card key={id} id={id} name={name} email={email} />
    ))}
  </Fragment>
);
export default CardList;

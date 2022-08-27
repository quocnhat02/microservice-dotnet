import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => (
  <Fragment>
    {robots.map(({ id, name, email }) => (
      <Card key={id} id={id} name={name} email={email} />
    ))}
  </Fragment>
);

export default CardList;

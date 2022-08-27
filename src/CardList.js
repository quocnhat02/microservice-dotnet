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
//   const cardArrays = robots.map(({ id, name, email }) => (
//     <Card key={id} id={id} name={name} email={email} />
//   ));

//   return <div>{cardArrays}</div>;

export default CardList;

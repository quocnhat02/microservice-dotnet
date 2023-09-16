import { Roles } from "./roles";

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const person: Person = {
  name: "John",
  email: "john@gmail.com",
  password: "john123",
  role: Roles.editor,
};

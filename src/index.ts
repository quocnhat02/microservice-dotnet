import { Type } from "./roles";

// type TypeOfLibrary = 'national' | 'academic'|'public'

type Book = {
  title: string;
  pages: number;
  isbn: string;
};

type Member = {
  name: string;
  phone: string;
  [key: string]: string;
};

type Library = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: Type;
  books: Book[];
  genres: string[];
  members: Member[];
};

const library: Library = {
  name: "New York Library",
  address: "New York",
  numberOfBooks: 1234,
  type: Type.national,
  books: [
    {
      title: "Nodejs",
      pages: 250,
      isbn: "988-66-443",
    },
  ],
  genres: ["backend"],
  members: [
    {
      name: "Nhat",
      phone: "09999999",
      email: "nhat@gmail.com",
    },
  ],
};

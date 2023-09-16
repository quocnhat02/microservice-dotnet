type Dog = {
  name: string;
  bark: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  bark: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

let dogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  bark: true,
  wags: false,
  purrs: true,
};

type Cat = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog = {
  name: string;
  bark: boolean;
  color: string;
};

type HybridAnimal = Dog & Cat;

const hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "white",
  bark: true,
  purrs: false,
};

export {};

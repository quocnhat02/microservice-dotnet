enum AgeUnit {
  years = "years",
  months = "months",
}

type greetingFunction = (greeting: string) => string;

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  greet: greetingFunction;
};

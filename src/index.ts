let number: readonly number[] = [1, 2, 3];

type readOnlyPerson = readonly [string, string, number];

const person: readOnlyPerson = ["John", "Smith", 23];

type a = Readonly<string[]>;
type b = Readonly<[string, string, number]>;

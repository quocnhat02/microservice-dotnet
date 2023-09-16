type Filter = {
  (array: number[], predicate: (item: number) => boolean): number[];
  (array: string[], predicate: (item: string) => boolean): string[];
  (array: object[], predicate: (item: object) => boolean): object[];
};

function filter(array: any[], predicate: Function) {
  let result: any[] = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function greaterThanSeven(item: number) {
  return item > 7;
}

console.log(filter(numbers, greaterThanSeven));

let animals = ["cat", "dog", "lion"];

function filterCats(item: string) {
  return item === "cat";
}

console.log(filter(animals, filterCats));

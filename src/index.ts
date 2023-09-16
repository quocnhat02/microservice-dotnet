type StringOrNumber = number | string;

function addNumberOrString(
  a: StringOrNumber,
  b: StringOrNumber,
): StringOrNumber {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(addNumberOrString(5, 7));
console.log(addNumberOrString("M", 10));

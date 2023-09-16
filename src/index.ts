function multiByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "Please provide a valid number";
}

console.log(multiByTwo(5));
console.log(multiByTwo("5"));

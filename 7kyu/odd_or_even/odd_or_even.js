function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  }
  let num = Number(array.reduce((a, b) => a + b));
  return num % 2 === 0 ? "even" : "odd";
}

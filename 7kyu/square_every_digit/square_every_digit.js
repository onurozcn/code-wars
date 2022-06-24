function squareDigits(num) {
  return parseInt(
    Array.from(num.toString())
      .map((number) => number * number)
      .join("")
  );
}

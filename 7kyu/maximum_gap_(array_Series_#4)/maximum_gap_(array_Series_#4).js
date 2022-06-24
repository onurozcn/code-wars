function maxGap(numbers) {
  let temp =
    numbers.sort((a, b) => a - b)[1] - numbers.sort((a, b) => a - b)[0];
  for (let i = 2; i < numbers.length; i++) {
    if (
      numbers.sort((a, b) => a - b)[i] - numbers.sort((a, b) => a - b)[i - 1] >
      temp
    )
      temp =
        numbers.sort((a, b) => a - b)[i] - numbers.sort((a, b) => a - b)[i - 1];
  }
  return temp;
}

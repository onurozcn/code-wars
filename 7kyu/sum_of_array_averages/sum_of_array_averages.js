const sumAverage = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].reduce((a, b) => a + b, 0) / arr[i].length;
  }

  return Math.floor(result);
};

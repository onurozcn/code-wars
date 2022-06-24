const binaryArrayToNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) sum += Math.pow(2, arr.length - 1 - i);
  }
  return sum;
};

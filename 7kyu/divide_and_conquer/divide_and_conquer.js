function divCon(x) {
  let sum = 0;
  let stringSum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") sum += x[i];
    else stringSum += Number(x[i]);
  }
  return sum - stringSum;
}

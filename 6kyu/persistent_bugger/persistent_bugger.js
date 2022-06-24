function persistence(num) {
  let count = 0;
  while (num >= 10) {
    count++;
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * Number(b), 1);
  }
  return count;
}

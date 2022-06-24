function digital_root(n) {
  let result = n
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0);
  while (result > 9) {
    result = result
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
  }
  return result;
}

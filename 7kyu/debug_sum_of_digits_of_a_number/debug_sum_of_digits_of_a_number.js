function getSumOfDigits(integer) {
  return integer
    .toString()
    .split("")
    .reduce((sum, b) => sum + Number(b), 0);
}

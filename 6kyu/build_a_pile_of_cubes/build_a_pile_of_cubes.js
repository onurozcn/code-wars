function findNb(m) {
  let result = 0;
  let n = 0;
  while (result < m) {
    n++;
    result += n ** 3;
  }

  return result === m ? n : -1;
}

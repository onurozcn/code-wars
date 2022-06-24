function getCount(str) {
  let count = 0;

  let newStr = str.split("");

  for (let i = 0; i < newStr.length; i++) {
    if (/[aeiou]/.test(newStr[i])) count++;
  }
  return count;
}

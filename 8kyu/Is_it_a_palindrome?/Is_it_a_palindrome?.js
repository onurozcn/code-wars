function isPalindrome(x) {
  return [...x.toLowerCase()].reverse().join("") === x.toLowerCase()
    ? true
    : false;
}

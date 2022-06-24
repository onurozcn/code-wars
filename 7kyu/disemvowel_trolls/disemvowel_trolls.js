function disemvowel(str) {
  return str
    .split(" ")
    .map((word) => word.replace(/[aeiou]/gi, ""))
    .join(" ");
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (char, index, word) {
      return word.indexOf(char) == word.lastIndexOf(char) ? "(" : ")";
    })
    .join("");
}

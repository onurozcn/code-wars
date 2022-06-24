function printerError(s) {
  let count = 0;
  let color = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
  let newArr = s.split("");
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < color.length; j++) {
      if (newArr[i] === color[j]) {
        count++;
        continue;
      }
    }
  }
  return `${s.length - count}/${s.length}`;
}

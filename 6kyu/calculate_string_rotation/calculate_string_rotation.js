function shiftedDiff(first, second) {
  let temp = "";
  let lnt = second.length;
  if (first === second) return 0;

  for (let i = 1; i < first.length; i++) {
    let arr = second.split("");
    temp = arr.splice(i, lnt).join("") + arr.splice(0, i).join("");
    console.log(temp + "  " + i);
    if (temp === first) return i;
  }
  return -1;
}

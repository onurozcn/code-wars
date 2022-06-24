function towerBuilder(nFloors) {
  let newArr = [];
  for (let i = 1; i <= nFloors; i++) {
    let blank = " ".repeat(nFloors - i);
    let asterix = "*".repeat(2 * i - 1);
    newArr.push(`${blank}${asterix}${blank}`);
  }
  console.log(newArr);
  return newArr;
}

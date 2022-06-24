function findShort(s) {
  let newArr = s.split(" ");
  let temp =newArr[0].length
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i].length < temp) {
      temp = newArr[i].length;
    }
  }
  return temp;
}


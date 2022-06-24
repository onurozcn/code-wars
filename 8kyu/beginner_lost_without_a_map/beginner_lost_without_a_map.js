function maps(x) {
  const newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr[i] = x[i] * 2;
  }
  return newArr;
}


// ----- Second solution ----- 

// function maps(x) {
//   return x.map((n) => n * 2);
// }
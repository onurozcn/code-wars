function digitize(n) {
  const temp = [];
  if (n === 0) {
    temp.push([0]);
  } else {
    while (n > 0) {
      temp = n % 10;
      n = Math.floor(n / 10);
    }
    return temp;
  }
}

// ------ Second Solution ------

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }
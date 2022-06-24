var countBits = function (n) {
  let sum = 0;
  while (n) {
    sum += n % 2;
    n = Math.floor(n / 2);
  }
  return sum;
};



// ----- Second Solution -----

// var countBits = function (n) {
//   return n.toString(2).split("0").join("").length;
// };

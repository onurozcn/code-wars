function findOutlier(integers) {
  if (integers[0] % 2 === 0 && integers[1] % 2 === 0) {
    return integers.filter((x) => x % 2 !== 0)[0];
  } else if (integers[0] % 2 !== 0 && integers[1] % 2 !== 0) {
    return integers.filter((x) => x % 2 === 0)[0];
  } else if (integers[2] % 2 === 0) {
    return integers.filter((x) => x % 2 !== 0)[0];
  }
  else return integers.filter((x) => x % 2 === 0)[0];
}


// ----- Second Solution -----

// function findOutlier(integers) {
//   let even = integers.filter((x) => x % 2 === 0);
//   let odd = integers.filter((x) => x % 2 !== 0);
//   return even.length === 1 ? even[0] : odd[0];
// }

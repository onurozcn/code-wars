function moveZeros(arr) {
  let n = arr.filter((x) => x === 0);
  console.log(n);
  return arr.filter((x) => x !== 0).concat(n);
}

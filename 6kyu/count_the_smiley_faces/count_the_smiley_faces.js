function countSmileys(arr) {
  let count = 0;
  arr.forEach((face) => {
    console.log(/(:|;)(-|~)?(\)|D)/.test(face));
    if (/(:|;)(-|~)?(\)|D)/.test(face)) count++;
  });
  return count;
}


// ----- Second Solution -----

// function countSmileys(arr) {
//   return arr.filter((item) => /[:;][-~]?[)D]/.test(item)).length;
// }

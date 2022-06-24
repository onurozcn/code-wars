function accum(s) {
  return s
    .split("")
    .map((chr, index) => chr.toUpperCase() + chr.toLowerCase().repeat(index))
    .join("-");
}

// ----- Second Solution -----

// function accum(s) {
//   let output = [];
//   let newArr = s.toLowerCase();
//   for (let i = 0; i < newArr.length; i++) {
//     let str = newArr[i].toUpperCase();
//     for (let j = 0; j < i; j++) {
//       str += newArr[i];
//     }
//     output.push(str);
//   }
//   return output.join("-");
// }

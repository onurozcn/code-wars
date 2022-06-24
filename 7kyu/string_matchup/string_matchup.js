const solve = (a, b) => b.map((x) => a.filter((n) => n === x).length);


// ----- Second Solution -----

// function solve(a, b) {
//   const result = [];
//   for (let i = 0; i < b.length; i++) {
//     let count = 0;
//     for (let j = 0; j < a.length; j++) {
//       if (b[i] === a[j]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   return result;
// }

function removeEveryOther(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) newArr.push(arr[i]);
  }
  return newArr;
}


// ----- Second Solution ----- 

// function removeEveryOther(arr) {
//   return arr.filter(function (elem, index) {
//     return index % 2 === 0;
//   });
// }
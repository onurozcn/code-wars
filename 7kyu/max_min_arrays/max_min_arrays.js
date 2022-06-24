function solve(arr) {
  let final = [];
  let smallArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length / 2; i++) {
    final.push(smallArr[arr.length - 1 - i]);
    if (arr.length - 1 - i !== (arr.length - 1) / 2) final.push(smallArr[i]);
  }
  return final;
}


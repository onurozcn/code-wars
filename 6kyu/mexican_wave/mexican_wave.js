function wave(str) {
  // Code here
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let arr = str.split("");
    if (arr[i].match(/[a-z]/)) {
      arr[i] = arr[i].toUpperCase();
      result.push(arr.join(""));
    }
  }
  return result;
}

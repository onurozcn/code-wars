function remove(string) {
  for (let i = string.length; i > 0; i--) {
    if (string[i - 1] === "!") continue;
    else return string.slice(0, i);
  }
}

// ----- Second Solution -----

// function remove(string) {
//   let temp = string;
//   let i = 1;
//   while (string.charAt(temp.length - 1) === "!") {
//     temp = string.slice(0, string.length - i);
//     i++;
//   }
//   return temp;
// }

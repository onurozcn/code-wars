function multi(arr) {
  return arr.reduce((prod, num) => prod * num, 1);
}
function add(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
function reverse(str) {
  return [...str].reverse().join("");
}

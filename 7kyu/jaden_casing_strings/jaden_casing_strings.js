String.prototype.toJadenCase = function () {
  let newArr = this.split(" ");
  return newArr
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
};

function basicOp(operation, value1, value2) {
  return math_it_up[operation](value1, value2);
}

var math_it_up = {
  "+": function (x, y) {
    return x + y;
  },
  "-": function (x, y) {
    return x - y;
  },
  "/": function (x, y) {
    return x / y;
  },
  "*": function (x, y) {
    return x * y;
  },
};

// ----- Second Solution -----

// console.log(basicOp("-", 4, 7));
// function basicOp(o, a, b) {
//   return eval(a + o + b);
// }

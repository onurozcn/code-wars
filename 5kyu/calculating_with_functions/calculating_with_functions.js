function calcFunc(op, num ){
  if(op === undefined)
    {
      return num
    }
  return op(num)
}

function zero(op) {
  return calcFunc(op, 0)
}
function one(op) {
  return calcFunc(op, 1)
}
function two(op) {
 return calcFunc(op, 2)
}
function three(op) {
   return calcFunc(op, 3)
}
function four(op) {
   return calcFunc(op, 4)
}
function five(op) {
  return calcFunc(op, 5)
}
function six(op) { 
  return calcFunc(op, 6)
}
function seven(op) { 
  return calcFunc(op, 7)
}
function eight(op) { 
  return calcFunc(op, 8)
}
function nine(op) { 
  return calcFunc(op, 9)
}

function plus(n) {
  return function(r){
    return n+r
  }
}
function minus(n) {
  return function(r){
    return r-n
  }
}
function times(n) {
  return function(r){
    return n*r
  }
}
function dividedBy(n) {
  return function(r){
    return Math.floor(r/n)
  }}



// ----- Second Solution -----

// function zero(operation) { return operation ? operation(0) :0}
// function one(operation) { return operation ? operation(1) :1}
// function two(operation) { return operation ? operation(2) :2}
// function three(operation) { return operation ? operation(3) :3}
// function four(operation) { return operation ? operation(4) :4}
// function five(operation) { return operation ? operation(5) :5}
// function six(operation) { return operation ? operation(6) :6}
// function seven(operation) { return operation ? operation(7) :7}
// function eight(operation) { return operation ? operation(8) :8}
// function nine(operation) { return operation ? operation(9) :9}

// function plus(right) {
//   return function(left){ return left + right}
// }
// function minus(right) { return function(left){ return left-right}}
// function times(right) { return function(left){ return left * right}}
// function dividedBy(right) { return function(left){ return Math.floor(left/ right)}}
function tribonacci(signature, n) {
  //your code here
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [signature[1]];
  } else {
    for (let i = 3; i <= n; i++) {
      signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
    }
    signature.pop();
    return signature;
  }
}

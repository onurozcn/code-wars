function adjacentElementsProduct(array) {
  let temp = array[0] * array[1];
  for (let i = 2; i < array.length; i++) {
    if (array[i] * array[i - 1] > temp) temp = array[i] * array[i - 1];
  }
  return temp;
}

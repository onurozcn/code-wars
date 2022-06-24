function sumDigits(number) {
  let sum = 0;
  while (Math.abs(number) >= 10) {
    sum += Math.abs(number % 10);
    number = Math.floor(Math.abs(number / 10));
  }

  return sum + number;
}

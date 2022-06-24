Guesser.prototype.getNumber = function (min, max) {
  min = min || 1;
  max = max || 1000;
  var guess = Math.floor(min + (max - min) / 2);
  var response = this.guess(guess);
  if (response === "Too high!") return this.getNumber(min, guess - 1);
  if (response === "Too low!") return this.getNumber(guess + 1, max);
  return guess;
};

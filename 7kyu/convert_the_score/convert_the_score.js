function scoreboard(string) {
  let newArr = string.split(" ");
  let score = [];
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case "zero":
        score.push(0);
        break;
      case "nil":
        score.push(0);
        break;
      case "one":
        score.push(1);
        break;
      case "two":
        score.push(2);
        break;
      case "three":
        score.push(3);
        break;
      case "four":
        score.push(4);
        break;
      case "five":
        score.push(5);
        break;
      case "six":
        score.push(6);
        break;
      case "seven":
        score.push(7);
        break;
      case "eight":
        score.push(8);
        break;
      case "nine":
        score.push(9);
        break;
    }
  }
  return score;
}

function solve(s) {
  let upperCase = 0;
  let lowerCase = 0;
  let convertedStr = s.split("").map((letter) => {
    if (letter.toUpperCase() === letter) upperCase++;
    else lowerCase++;
  });

  return upperCase > lowerCase ? s.toUpperCase() : s.toLowerCase(); //..
}

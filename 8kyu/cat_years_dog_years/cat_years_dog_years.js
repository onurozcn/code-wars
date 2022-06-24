var humanYearsCatYearsDogYears = function (humanYears) {
  let dog = 0;
  let cat = 0;
  let i = 1;
  while (i <= humanYears) {
    if (i >= 3) {
      dog += 5;
      cat += 4;
      i++;
    } else if (i === 2) {
      dog += 9;
      cat += 9;
      i++;
    } else {
      dog += 15;
      cat += 15;
      i++;
    }
  }
  return [humanYears, cat, dog];
};

function calculateAge(yearBorn, yearIn) {
  let difference = yearIn - yearBorn;
  if (difference === 1) {
    return "You are 1 year old.";
  }
  if (difference === -1) {
    return "You will be born in 1 year.";
  }
  if (difference === 0) {
    return "You were born this very year!";
  }
  if (difference > 1) {
    return `You are ${difference} years old.`;
  } else {
    return `You will be born in ${Math.abs(difference)} years.`;
  }

  return yearBorn < yearIn
    ? `You are ${yearIn - yearBorn} years old.`
    : yearBorn === yearIn
    ? `You were born this very year!`
    : `You will be born in ${yearBorn - yearIn} years.`;
}

// ----- Second Solution -----

// function calculateAge(birthYear, currentYear) {
//   let dif = currentYear - birthYear;
//   if (dif === -1) {
//     return "You will be born in 1 year.";
//   } else if (dif < -1) {
//     return `You will be born in ${Math.abs(dif)} years.`;
//   } else if (dif === 1) {
//     return `You are 1 year old.`;
//   } else if (dif === 0) {
//     return `You were born this very year!`;
//   } else if (dif > 0) {
//     return `You are ${dif} years old.`;
//   }
// }

// ----- Third Solution -----

// function calculateAge(m, n) {
//   if (m == n) return "You were born this very year!";
//   var year = Math.abs(m - n) == 1 ? "year" : "years";
//   if (m < n) return "You are " + (n - m) + " " + year + " old.";
//   if (m > n) return "You will be born in " + (-n + m) + " " + year + ".";
// }

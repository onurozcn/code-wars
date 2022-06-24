const quarterOf = (month) => {
  if (month === 1 || month === 2 || month === 3) {
    return 1;
  } else if (month === 4 || month === 5 || month === 6) {
    return 2;
  } else if (month === 7 || month === 8 || month === 9) {
    return 3;
  } else if (month === 10 || month === 11 || month === 12) {
    return 4;
  } else {
    console.log("a year has 12 motnhs!");
  }
};

// ----- Second Solution -----

// const quarterOf = (month) => {
//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       return 1;
//     case 4:
//     case 5:
//     case 6:
//       return 2;
//     case 7:
//     case 8:
//     case 9:
//       return 3;
//     case 10:
//     case 11:
//     case 12:
//       return 4;
//   }
// };


// ----- Third Solution -----

// const quarterOf = (month) => {
//   return Math.ceil(month / 3);
// };
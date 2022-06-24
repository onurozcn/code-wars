function points(games) {
  let total = 0;
  let newArr = games.map((item) => item.split(":"));
  for (let i = 0; i < newArr.length; i++) {
    if (+newArr[i][0] > +newArr[i][1]) total += 3;
    else if (+newArr[i][0] === +newArr[i][1]) total += 1;
    else total += 0;
  }
  return total;
}

// ----- Second Solution -----

// const points = (games) =>
//   games.reduce((output, current) => {
//     return (output +=
//       current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
//   }, 0);

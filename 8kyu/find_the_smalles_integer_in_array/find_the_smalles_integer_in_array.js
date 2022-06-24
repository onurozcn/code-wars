class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args.sort((a, b) => a - b);
    return smallest[0];
  }
}

// ----- Second Solution -----

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }
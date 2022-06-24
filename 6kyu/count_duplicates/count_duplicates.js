function duplicateCount(text) {
  return Object.values(
    text
      .toLowerCase()
      .split("")
      .reduce((acc, cur) => {
        if (acc[cur] === undefined) {
          acc[cur] = 1;
        } else {
          acc[cur] += 1;
        }
        return acc;
      }, {})
  ).filter((match) => match > 1).length;
}

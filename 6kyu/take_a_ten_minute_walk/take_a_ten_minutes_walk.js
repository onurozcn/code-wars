function isValidWalk(walk) {
  const directions = walk.reduce((acc, cur) => {
    if (acc[cur] === undefined) acc[cur] = 1;
    else acc[cur]++;
    return acc;
  }, {});
  if (walk.length === 10) {
    if (directions.s === directions.n && directions.w === directions.e)
      return true;
  }
  return false;
}

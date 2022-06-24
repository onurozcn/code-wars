var number = function (busStops) {
  let pessengerNum = 0;
  for (let i = 0; i < busStops.length; i++) {
    pessengerNum += busStops[i][0] - busStops[i][1];
  }
  return pessengerNum;
};

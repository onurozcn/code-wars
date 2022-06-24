class Journey {
  constructor(object, crew, balloons) {
    this.object = object;
    this.crew = crew;
    this.balloons = balloons;
  }
  isPossible() {
    return (
      (this.object.weight * 1000 + this.crew * 80 * 1000) / this.balloons <= 4.8
    );
  }
}

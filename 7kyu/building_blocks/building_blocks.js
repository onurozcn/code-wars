class Block {
  constructor(args) {
    this.width = args[0];
    this.length = args[1];
    this.height = args[2];
  }

  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.width * this.height * this.length;
  }
  getSurfaceArea() {
    return (
      2 * this.width * this.length +
      this.height * 2 * this.length +
      this.width * 2 * this.height
    );
  }
}

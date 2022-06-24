class Dictionary {
  constructor(key, value) {
    this.dict = { key, value };
  }
  newEntry(key, value) {
    this.dict[key] = value;
  }
  look(key) {
    return this.dict[key] || `Can't find entry for ${key}`;
  }
}

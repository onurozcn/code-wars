function filter_list(l) {
  const filtered = l.filter((item) => typeof item !== "string");
  return filtered;
}

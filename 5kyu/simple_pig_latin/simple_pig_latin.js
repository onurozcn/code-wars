function pigIt(str) {
  return str
    .split(" ")
    .map((string) =>
      /\W/.test(string)
        ? string
        : string.split("").slice(1).join("") + string.split("")[0] + "ay"
    )
    .join(" ");
}

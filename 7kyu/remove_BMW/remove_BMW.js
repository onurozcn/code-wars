function removeBMW(str) {
  if (typeof str !== "string") {
    throw new Error("This program only works for text.");
  } else return str.replace(/[BbmMwW]/g, "");
}

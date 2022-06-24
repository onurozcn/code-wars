function remove(string) {
  if (string.charAt(string.length - 1) === "!") {
    return string.slice(0, string.length - 1);
  } else return string;
}


// ----- Second Solution -----

// function remove(string) {
//      return string.replace(/!$/, "");
//  }
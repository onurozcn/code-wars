decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || " ")
    .join("");
};

// ----- Second Solution -----

// decodeMorse = function (morseCode) {
//   const separetedByWords = morseCode.trim().split("   ");
//   return separetedByWords
//     .map((x) =>
//       x
//         .split(" ")
//         .map((y) => MORSE_CODE[y])
//         .join("")
//     )
//     .join(" ");
// };



// ----- Third Solution -----

// decodeMorse = function (morseCode) {
//   const words = morseCode.trim().split(/\s\s+/);
//   const xxx = words.map((word) => {
//     const res = word.split(/\s+/).map((chr) => {
//       return MORSE_CODE[chr.trim()];
//     });
//     return res.join("");
//   });
//   return xxx.join(" ");
// };


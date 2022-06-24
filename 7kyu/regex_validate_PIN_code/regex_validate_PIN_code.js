function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }
  return false;
}

// ----- Second Solution -----

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }


// ----- Third Solution -----

// function validatePIN(pin) {
//   const onlyDigit = /^\d+$/;

//   return (
//     (onlyDigit.test(pin) && pin.length === 4) ||
//     (onlyDigit.test(pin) && pin.length === 6)
//   );
// }



// ----- Fourth Solution -----

// function validatePIN(pin) {
//   const { length } = pin;

//   switch (length) {
//     case 4:
//     case 6:
//       return /^\d+$/.test(pin);
//   }
//   return false;
// }

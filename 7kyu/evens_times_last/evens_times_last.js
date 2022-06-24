function evenLast(numbers) {
    if (!numbers.length) return 0;
    return (
        numbers.reduce((acc, curr, index) => (index % 2 ? acc : (acc += curr)), 0) *
        numbers[numbers.length - 1]
        );
    }
    

// ----- Second Solution -----

    // function evenLast(numbers) {
    //   let total = 0;
    //   for (let i = 0; i < numbers.length; ) {
    //     total += numbers[i] * numbers[numbers.length - 1];
    //     i += 2;
    //   }
    //   return total;
    // }
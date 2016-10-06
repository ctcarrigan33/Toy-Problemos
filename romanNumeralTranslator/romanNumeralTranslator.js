// Given a Roman numeral as input, write a function that converts the
// Roman numeral to a number and outputs it.
//
// In a Roman numeral, each character adds its value to the total. See
// the helper object DIGIT_VALUES for the correspondence between Roman
// numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)
//
// When a smaller numeral appears before a larger one, it becomes a
// subtractive operation. You can assume only one smaller numeral may
// appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)
//
// You should return "null" on invalid input.
//
//
// Examples
//                  Input	       Output
// romanNumeral:     "LX"	   |    60
// romanNumeral:     "IV"	   |     4
// romanNumeral:   "horse"	   |   "null"
// romanNumeral:     ""	     |     0


function translateRomanNumeral (romanNumeral) {
  // If input is falsy, return 0
  if (!romanNumeral) {
    return 0;
  }

  // Split the string into a character array
  var arr = romanNumeral.split('');

  // Find the largest numeral
  var largest = arr.reduce(function(max, curr) {
    // Determine that the character is a valid
    // roman numeral
    if (max in DIGIT_VALUES) {
      if (DIGIT_VALUES[curr] > DIGIT_VALUES[max]) {
        // Return the current value if it's
        // larger than the max we've found so far
        return curr;
      }

      // Otherwise keep the max we already have
      return max;
    }

    // Invalid numerals cause us to return null
    return null;
  })

  // Index of the largest numeral
  var index = arr.indexOf(largest);

  // Numerals to the left of largest
  var left = arr.slice(0, index).join('');

  // Numerals to the right of largest
  var right = arr.slice(index + 1).join('');

  // Ensure a largest roman numeral was found
  if (largest) {
    // Recursive case:
    // Starting with the value of the largest numeral,
    //   subtract off the value of all numerals to the left
    //   and add on the value of numerals to the right
    return DIGIT_VALUES[largest] -
           translateRomanNumeral(left) +
           translateRomanNumeral(right);
  }

  // Otherwise return null for invalid input
  return "null";
}

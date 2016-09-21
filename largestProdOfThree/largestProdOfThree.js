// Write a function that accepts an array of integers and returns the
// largest product possible from three of those numbers.
//
// Examples
// Input	                            Output
// array: [ 2, 1, 3, 7 ]	    |         42
//
// array: [ 0, 2, 3 ]	      |           0




var largestProductOfThree = function (array) {

  var sorted = array.sort(function (a, b) { return a - b; });

  var maybe = array[0] * array[1] * array[array.length - 1];
  var huh = array[array.length - 3] * array[array.length - 2] * array[array.length - 1];

  return Math.max(maybe , huh);
};

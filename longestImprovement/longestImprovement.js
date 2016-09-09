
// Given an array, find the length of the longest increasing sequence.

// Examples
//               Input	                     Output
// numbers: 1                         |        1
// numbers: [ 10, 20, 30, 10, 20 ]	  |  	     3



Input	Output
numbers:
[ 10 ]	1
numbers:
[ 10, 20, 30, 10, 20 ]	3


function longestImprovement (numbers) {
  if(!Array.isArray(numbers)) {
    return null;
  } else if (numbers.length === 0) {
    return 0;
  }

  var length = 1;
  var longest = 1;

  numbers.reduce(function(prev, curr, index, numbers) {
    if (curr > prev) {
      if (++length > longest) {
        longest = length;
      }
    } else {
      length = 1;
    }
    return curr;
  });
  return longest;
}

//
// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the
// first one. Return null if there are no even-occurrence items.


// Examples
//               Input	                         Output
// arr: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]     |   	   2
// arr: [ "cat", "dog", "dig", "cat" ]	  |      "cat"



var evenOccurrence = function(arr) {
  var val;

  arr.forEach(function(elem) {
    var occurrences = arr.reduce(function(accum,el) {
      var same = el === elem ? 1 : 0;
      return accum + same;
    }, 0);
    if (occurrences % 2 === 0 && val === undefined) {
      val = elem;
    }
  });

  return val === undefined ? null : val;
};

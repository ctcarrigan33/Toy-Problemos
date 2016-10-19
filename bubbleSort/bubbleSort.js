// Bubble sort is considered the most basic sorting algorithm in
// Computer Science. It works by starting at the first element of an
// array and comparing it to the second element:
//
// If the first element is greater than the second element, it swaps
// the two. It then compares the second to the third, and the third to
// the fourth, and so on. In this way, the largest values ‘bubble’ to
// the end of the array. Once it gets to the end of the array, it starts
// over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this
// technique.
//
// NOTE: DO NOT use the JS built-in sorting function (Array.prototype.sort).


// Examples
// Input	                                            Output
// input:  [ 20, -10, -10, 2, 4, 299 ]	    [ -10, -10, 2, 4, 20, 299 ]


var bubbleSort = function(input) {

var x = 0;
while (x < input.length) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] > input[i+1]) {
      var hold = input[i+1];
      input[i+1] = input[i];
      input[i] = hold;
    }
  }
  x++;
}

return input;
};

// Given an array of arbitrarily nested arrays, return n, where n is
// the deepest level that contains a non-array value.
//
// Examples
// Input	                                          Output
// array: [ [ 5 ], [ [ ] ] ]	                  |      2
// array: [ 10, 20, 30, 40 ]	                  |      1
// array: [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]	  |      4
// array: [ ]	                                |      0
// array: [ [ [ ] ] ]	                        |      0



function arrayception (array) {

  var count = 0;

  function search(array, depth) {
    array.forEach(function(value) {
      if (Array.isArray(value) && value.length) {
        search(value, depth+1);
      } else if (!Array.isArray(value)) {
        if (depth+1 > count) count = depth+1;
      }
    })
  }

  search(array,0);
  return count;
}

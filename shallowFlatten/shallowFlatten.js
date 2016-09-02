// Given an array of arrays, return all elements in a single array. Nested arrays will be at most one level deep, meaning
// [1, [2, 3], 4, [5], 6]
//
// and not
//
// [[[1],[2], [3]]]
//
// Hint: Use Array.isArray(elem) to see if something is an array.
//
// Examples
// Input	Output
// array:
// [ [ 10 ], [ 20, 30 ], [ 40 ] ]	[ 10, 20, 30, 40 ]
// array:
// [ [ 1, 1 ], [ 4 ], 3, [ 3 ], 4, [ 6, 7 ] ]	[ 1, 1, 4, 3, 3, 4, 6, 7 ]


function flatten (array) {
  return array.reduce(function(flat, current) {
     if (Array.isArray(current)) {
      return flat.concat(flatten(current));
     } else {
      flat.push(current);
      return flat;
     }
  }, []);
}

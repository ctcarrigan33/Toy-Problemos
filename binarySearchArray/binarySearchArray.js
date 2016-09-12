// Given a sorted array of integers, find the index of a target
// value using a binary search algorithm.
//
// A binary search finds an item in a sorted array by repeatedly choosing a
// middle value and dividing the search interval in half. The initial interval
// includes the whole array. If the value of the target value is less than the
// middle value of the interval, then the next interval will be the lower half of
// the current interval. If the value of the target value is greater than the
// middle value, then the next interval will be the upper half. The search process
// repeats until the middle value is equal to the target value, or the search
// interval is empty.
//
// Note:
// Your function should return -1 for target values not in the array.


// Parameters:
//
// array (required) - an array.
//
// target (required) - an integer value.


//                        Examples
//               Input	                       Output
// array: [ 5 ]                  target: 4	|   -1
// array: [ 11, 12, 13, 14, 15 ] target: 11	|    0
// array: [ 11, 12, 13, 14, 15 ] target: 12	|    1
// array: [ 11, 12, 13, 14, 15 ] target: 13	|    2
// array: [ 11, 12, 13, 14, 15 ] target: 14	|    3
// array: [ 11, 12, 13, 14, 15 ] target: 15	|    4
// array: [ 11, 12, 13, 14, 15 ] target: 16	|   -1



function binarySearch (array, target) {
  // Init to start of array
  var min = 0;
  // Init to end of array
  var max = array.length;
  // Init to the midpoint of the entire array
  var mid = Math.floor((max + min) / 2);
  // Search for target as long
  // as min and max haven't met
  while (min !== max) {
    if (target < array[mid]) {
      // If the target is less than the
      // midpoint value,
      //   set the new max to the midpoint - 1
      max = mid - 1;
    } else if(target > array[mid]) {
      // If the target is greater than the
      // midpoint value,
      //   set the new min to midpoint + 1
      min = mid + 1;
    } else {
      // If we find the target,
      //   break out of the while loop
      break;
    }
    // Calculate the new midpoint based on the
    // changed min/max index
    mid = Math.floor((max + min) / 2);
  }
  // Return the target if we found it,
  // otherwise return -1
  if (array[mid] === target) {
    return target;
  }
  return -1;
}

//
// TL;DR
//
function binarySearch (array, target) {
  var min = 0, max = array.length;
  var mid = Math.floor((max + min) / 2);
  while (min !== max) {
    if (target < array[mid]) {
      max = mid - 1;
    } else if(target > array[mid]) {
      min = mid + 1;
    } else {
      break;
    }
    mid = Math.floor((max + min) / 2);
  }
  return array[mid] === target ? mid : -1;
}

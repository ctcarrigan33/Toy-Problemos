var mergeSort = function (arr) {
  if (arr.length < 2) return arr;

  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));

  return merge(arr, left, right)
};

var merge = function (arr, left, right) {
  var i = 0;
  var j = 0;
  var k = 0;

  while (j < left.length && k < right.length) {
    if (left[j] <= right[k]) {
      arr[i] = left[j];
      j += 1;
    } else {
      arr[i] = right[k];
      k += 1;
    }
    i += 1;
  }

  while (j < left.length) {
    arr[i] = left[j];
    i += 1;
    j += 1;
  }

  while (k < right.length) {
    arr[i] = right[k];
    i += 1;
    k += 1;
  }

  return arr;
};

function quickSort(arr) {

  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let divided = arr.slice(1).reduce( (dividedArrs, curr) => {
      if (curr < pivot) {
        dividedArrs.smaller.push(curr);
      } else {
        dividedArrs.larger.push(curr);
      }
      return dividedArrs;
    }, {smaller: [], larger: []});

    return [...quickSort(divided.smaller), pivot, ...quickSort(divided.larger)]
  }
}

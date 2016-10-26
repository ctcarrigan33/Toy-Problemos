// Make an array method that can return whether or not a context
// array is a subset of an input array. To simplify the problem,
// you can assume that both arrays will contain only strings.


Array.prototype.isSubsetOf = function(contextArray) {
  let occurred = {};
  contextArray.forEach((item) => occurred[item] = true);

  return this.reduce((result, item) => result && !!occurred[item], true)
};

// Write a function that accepts two strings as arguments,
// and returns only the characters that are common to both strings.
//
// Your function should return the common characters in the same order
// that they appear in the first argument. Do not return duplicate characters
// and ignore whitespace in your returned string.
//
// Example: commonCharacters('acexivou', 'aegihobu')
//
// Returns: 'aeiou'


commonCharacters = function(string1, string2){
  var str1 = string1.split('');
  var str2 = string2.split('');
  var results = [];

  str1.forEach(function(letter) {
    if (results.indexOf(letter) < 0 && letter !== ' '
    && str2.indexOf(letter) !== -1) {
        results.push(letter);
    }
  })
  return results.join('');
};

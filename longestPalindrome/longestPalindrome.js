// Implement a function that finds the longest palindrome in a given string.
// For example, in the string “My dad is a racecar athlete”, the
// longest palindrome is “a racecar a”. Count whitespaces as valid characters.
// Other palindromes in the above string include “dad”, “ete”, “ dad “
// (including whitespace on each side of dad).


// Examples
//               Input	                         Output
// string: "aibohphobia"                    |   "aibohphobia"
// string: "My dad is a racecar athlete"	  |  	"a racecar a"


var longestPalindrome = function (string) {
  var result = '';

  for (var i = 0; i < string.length; i += 1) {
    for (var j = string.length; j > i; j -= 1) {
      var word = string.slice(i, j);

      if (isPalindrome(word) && word.length > result.length) {
        result = word;
      }
    }
  }

  return result;
};

var isPalindrome = function (string) {

  if (string.length < 2) return true;
  if (string[0] !== string[string.length - 1]) return false;
  return isPalindrome(string.slice(1, string.length - 1));
};

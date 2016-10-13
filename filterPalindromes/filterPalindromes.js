// Given an array of words (array of strings), return all words
// that are palindromes.
//
// Examples
// Input	                                  |        Output
// words: [ "word", "Ana", "race car" ]	  |   [ "Ana", "race car" ]


function filterPalindromes (words) {
  var results = [];

  for (var i=0; i<words.length; i++) {
    if (isPalindrome(words[i])) {
      results.push(words[i]);
    }
  }

  return results;
}


function isPalindrome (str) {
  str = str.toLowerCase();
  var pal = [ ];
  var palin = [ ];
  for (var i=0; i<str.length; i++) {
  	var alpha = str.charCodeAt(i);
  	if (alpha >= 97 && alpha <= 122) {
  		pal.push(str[i]);
  		palin.unshift(str[i]);
  	}
  }
  if(pal.join('') === palin.join('')) {
  	return true;
  } else {
  	return false;
  }
}

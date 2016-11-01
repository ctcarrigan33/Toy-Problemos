// Given a string, return true if it contains balanced parenthesis ().
//
// Examples
// Input	                                            Output
// string: "(x + y) - (4)"	                           true
// string: "(((10 ) ()) ((?)(:)))"	                   true
// string: "(50)("	                                   false
// string: ""	                                         true


function isBalanced (string) {
  var stack = [];
  var map = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  };
  var length = string.length;
  var i, currentChar, popped;

  for (i = 0; i < length; i += 1) {
    currentChar = string[i];

    if ( isOpening(currentChar) ) {
      stack.push( currentChar );
    } else if ( isClosing(currentChar) ) {
      popped = stack.pop();
      if ( map[currentChar] !== popped ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

var isOpening = function (char) {
  return char === '(' || char === '[' || char === '{';
};

var isClosing = function (char) {
  return char === ')' || char === ']' || char === '}';
};

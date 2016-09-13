// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].


//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false






function isBalanced (str) {
  var map = {'{':'}','[':']','(':')'};
  var stack = [];

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (map[char]) {
      stack.push(char);
    } else if (char === '}' || char === ']' || char === ')') {
      if (map[stack.pop()] !== char){
        return false;
      }
    }
  }

  return stack.length === 0;
}

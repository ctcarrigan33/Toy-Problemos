



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

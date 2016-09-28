// Given an array of unique words, find the word that contains the greatest 
// number of other words. A word must be at least two letters long. For an
// added challenge, try for O(n).
//
// Examples
//                             Input	                            Output
// wordList: [ "gray", "grays", "ray", "rays", "strays" ]	 |    "grays"




function nestedWordCount (wordList) {
  var max = count = 0;
  var answer;

  for (var i=0; i <wordList.length; i++){
    for(var k=0; k<wordList.length; k++){
      if(wordList[i].search(wordList[k]) > -1) count++;
    }
    if(count > max) {
      max = count;
      answer = wordList[i];
    }
    count = 0;
  }
  return answer;
}

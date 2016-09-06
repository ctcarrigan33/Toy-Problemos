// Given an alphabet and a string of text, write a method that tallies
// the count of each letter defined in said alphabet (case insensitive),
// then return the result of this tally.
//
// Examples
//               Input	                                  Output
// alphabet: "aBc" | text: "aabbccdd"	              | "a:2,b:2,c:2"
// alphabet: "x"   | text: "Racer X is my friend :)"	| "x:1"
// alphabet: "123" | text: "o hai"                   |	"no matches"




function alphaCount (alphabet, text) {
  // make case-insensitive
  alphabet = alphabet.toLowerCase();
  text = text.toLowerCase();
  var alpha;
  // set to empty string, not undefined
  var string1 = "";
  //loop through alphabet
  for (var i=0; i<alphabet.length; i++) {
    var count = 0; //
    //set current index = element; (left val takes right val, not vice-versa)
    alpha = alphabet[i];
      //loop through text, set count = count in string
      for (var k=0; k<text.length; k++) {
      //move to next index in alphabet
        if (alpha === text[k]) {
          count++;
        }
      }
    // set empty string after finding total equivalencies for alpha
    if(count > 0) {
      if (string1 !== "") {
        // if not first addition to string1, add comma first
      	string1 += "," + alpha + ":" + count +"";
      } else {
        // otherwise, create first addition to string1
      	string1 += "" + alpha + ":" + count +"";
      }
    }
  }
  // if string1 is still empty, no matches
  if (string1 === "") {
    return "no matches";
  } else {
    return string1;
  }
}

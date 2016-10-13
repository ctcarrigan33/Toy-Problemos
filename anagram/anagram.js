// Given two strings, return true if one string is an anagram of another.
// Note: Spaces must be filtered out.
//
// Examples
//     Input	                 Output
// a: "silent"                 true
// b: "listen"
//
// a: "torchwood"              true
// b: "doctor who"
//
// a: "why?"                   false
// b: "why not?"


function isAnagram (a, b) {
    var y = a.replace(/\s/g, '').split("").sort().join("");
    var z = b.replace(/\s/g, '').split("").sort().join("");

    if (z === y) return true;
    else return false;
}

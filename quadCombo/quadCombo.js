// Quad Combination
//
// Given an array of numbers arr and a number S, find 4 different numbers in arr
// that sum up to S.
//
// Write a function that gets arr and S and returns an array with 4 indices of
// such numbers in arr, or null if no such combination exists.
// Explain and code the most efficient solution possible, and analyze its runtime
// and space complexity.
//
// Hints & Tips
// The array is not sorted, and may hold any real number (positive, negative,
// zero, integer or fraction)
//
//
// The naive solution is to iterate on every possible combination of 4 numbers
// from arr until the required combination if found. Using 4 nested loop involves
// O(n4) time complexity and O(1) space complexity. This is quite inefficient.
//
// We can do better, if we look at all the pairs in arr, and then try to build the
// sum S from 2 different pairs.
// First, we iterate over all the possible pairs in arr with 2 nested loops and
// hash each pair by its sum. Then, for each pairSum in the pairs hash table, we
// look for its complement S - pairSum. When we find two pairs that sum up to S,
// we need to check that these pairs are drawn from 4 different indices in arr (in
// other words: that no number is used twice to reach the desired sum).



function findArrayQuadCombination(arr, S){
   if (arr == null || S == null) return null;
   var n = arr.length;
   if (n < 4) return null;
   var pairHash = new HashTable();

   for (var i=0; i<n; i++) {
     for (var j=i+1; j<n-1; j++) {
       if (!pairHash.isMapped(arr[i]+arr[j])) {
         pairHash.map(arr[i]+arr[j], []);
       }
       pairHash.get(arr[i]+arr[j]).push([i, j]);
     }
   }

   for (pairSum in pairHash.getKeys()) {
     if (pairHash.isMapped(S - pairSum)) {
        var pairsA = pairHash.get(pairSum);
        var pairsB = pairHash.get(S - pairsSum);
        var combination = find4Uniques(pairsA, pairsB);
        if (combination != null) return combination;
      }
   }
   return null;
 }




// Helper function:
// Gets 2 arrays of sub-arrays of 2 numbers
// Gets 4 unique numbers, from 2 sub-arrays of different arrays

function find4Uniques(A, B){
   var lenA = A.length;
   var lenB = B.length;
   for (var i=0; i < lenA-1; i++) {
      for (var j=0; j<lenB-1; j++) {
         if ( A[i][0] == B[j][0] || A[i][1] == B[j][1] ||
              A[i][0] == B[j][1] || A[i][1] == B[j][0] ) {
            continue;
          } else return [A[i][0], A[i][1], B[j][0], B[j][1]];
      }
    }
   return null;
 }

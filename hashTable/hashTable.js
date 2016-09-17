// Hash table should have the methods insert(), retrieve(), and remove().
// Your hash table need not resize itself, but shall handle collisions.



var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index    = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];

      for (var i = 0; i < storage[index].length; i += 1) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          return;
        }
      }

      storage[index].push( [key, value] );
      storage[index] = storage[index];
    };


    table.retrieve = function(key){
      var index    = getIndexBelowMaxForKey(key, storageLimit);
      var bucket = storage[index] || [];

      for (var i = 0; i < bucket.length; i += 1) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }

      return null;
    };


    table.remove = function(key){

      var index    = getIndexBelowMaxForKey(key, storageLimit);
      var bucket = storage[index] || [];

      for (var i = 0; i < bucket.length; i += 1) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          break;
        }
      }

    }

    return table;
  };
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };

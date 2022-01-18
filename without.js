
const without = function(source, itemsToRemove) {
  let storeArray = source;
  for (let x = 0; x < storeArray.length; x++) {
    for (let y = 0; y <= itemsToRemove.length; y++) {
      if(storeArray[x] === itemsToRemove[y]){
        storeArray.splice(x, 1);
      y = 0;
      x = 0;
      }
    } 
  }
  return storeArray;
};

module.exports = without;
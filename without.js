const eqArrays = function(a1, a2) {
  let x = a1.length;
  if (x === a2.length) {
  for (i = 0; i < x; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
}
 return false;
};

const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2)){
    console.log("Assertion passed: " + ar1 + " === " + ar2);
    return true;
  } else {
    console.log("Assertion failed: " + ar1 + " !== " + ar2);
    return false;
  }
};

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


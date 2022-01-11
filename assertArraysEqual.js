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

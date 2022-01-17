const eqArrays = require('./eqArrays');

const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2)){
    console.log("Assertion passed: " + ar1 + " === " + ar2);
    return true;
  } else {
    console.log("Assertion failed: " + ar1 + " !== " + ar2);
    return false;
  }
};

module.exports = assertArraysEqual;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(assertArraysEqual(middle([1,4,7,12,16]), [16,5,11,12,13]));
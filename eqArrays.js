const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);
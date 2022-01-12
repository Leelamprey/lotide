const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let ch, count;
  let counts = {};
  for (let i = 0; i < string.length; i++) {
    ch = string.charAt(i);
    count = counts[ch];
    counts[ch] = count ? count +1 : 1;
  }
  
  return counts;
};


let stringy = "Hello How";
console.log(countLetters(stringy));
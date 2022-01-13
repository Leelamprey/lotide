const eqArrays = function(a1, a2) {
  if (a1.length === a2.length) {
  for (i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
}
 return false;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for(const key in object1) {
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      if (eqArrays(object1[key], object2[key]) === false) { 
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)) {
    console.log(`Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

const ab = {a: "11", b: "21"};
const ba = {b: "21", a: "11"};
assertObjectsEqual(ab, ba); 
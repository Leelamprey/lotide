

const middle = function(array) { 
let noMid = [];
let storeArray = [];
let values;
  if (array.length <= 2){
    return noMid;
  } else {
    if(array.length % 2 === 0) {
      values = array.length/2
      storeArray.push(array[values - 1], array[values]);
    } else if (array.length % 2 !== 0) {
      values = (array.length - 1)/2 + 1;
      storeArray.push(array[values-1]);
    }
    return storeArray;
  }
};

module.exports = middle;
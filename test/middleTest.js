
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 7 for [1, 4, 7, 12, 16]", () => {
    assert.deepEqual(middle([1,4,7,12,16]), [7]);
  });
 
});
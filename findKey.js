const findKey = (object, callback) => Object.keys(object).find(key => callback(object[key]));
module.exports = findKey;
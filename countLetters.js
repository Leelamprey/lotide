

const countLetters = function(string) {
  let ch, count;
  let counts = {};
  let str = string.replace(/\s+/g, ''); 
  for (let i = 0; i < str.length; i++) {
    ch = str.charAt(i);
    count = counts[ch];
    counts[ch] = count ? count +1 : 1;
  }
  for (ch in counts) {
    console.log(ch + " count: " + counts[ch]);
  }
  return counts;
};

module.exports = countLetters;
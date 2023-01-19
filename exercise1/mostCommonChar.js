const mostCommonChar = (word) => {
  let mostCommon = {};
  let maxCount = 0;

  for (c of word) {
    let currentCount = mostCommon[c] ? mostCommon[c] + 1 : 1;
    mostCommon[c] = currentCount;
    maxCount = Math.max(maxCount, currentCount);
  }
  res = {};
  Object.keys(mostCommon).map((key) => {
    if (mostCommon[key] === maxCount) {
      res[key] = mostCommon[key];
    }
  });
  return res;
};

const word = 'annoying';
// const word = 'implementation';
// const word = '';

// edge case when the given str is number

console.log(mostCommonChar(word));

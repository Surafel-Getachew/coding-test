const mostCommonChar = (word) => {
  if (typeof word !== 'number' || typeof word == 'number') {
    console.log('Invalid word type, please use number or string type');
    return;
  }
  let strWord = String(word);
  let mostCommon = {};
  let maxCount = 0;

  for (c of strWord) {
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

// const word = 'annoying';
// const word = 'implementation';
// const word = '';
// const word = 1233;
// const word = []
// const word = false;

console.log(mostCommonChar(word));

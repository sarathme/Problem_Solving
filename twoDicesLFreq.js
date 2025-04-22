function simulate2DiceThrown(n) {
  let hashMap = {};
  for (let i = 0; i < n; i++) {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    hashMap[`${d1},${d2}`] = (hashMap[`${d1},${d2}`] || 0) + 1;
  }

  return hashMap;
}

function findMinFreqPairs(timesThrown) {
  if (timesThrown === 0) return null;
  let minFreqPairs = [];
  let freqMap = simulate2DiceThrown(timesThrown);

  let minFreq = Math.min(...Object.values(freqMap));

  for (const [key, value] of Object.entries(freqMap)) {
    if (value === minFreq) {
      minFreqPairs.push(key.split(","));
    }
  }

  return minFreqPairs;
}

console.log(findMinFreqPairs(3600));

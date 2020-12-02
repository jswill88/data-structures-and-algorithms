const find_word_concatenation = function (str, words) {
  const result_indices = [];
  let left = 0,
    right = 0,
    matches = 0;
  const wordLength = words[0].length,
    hashTable = {};
  for (let word of words) {
    if (!(word in hashTable)) {
      hashTable[word] = 0;
    }
    hashTable[word]++;
  }
  while (right + wordLength <= str.length) {
    let rightSub = str.substring(right, right + wordLength);
    if (rightSub in hashTable) {
      hashTable[rightSub]--;
      if (hashTable[rightSub] === 0) {
        left = !matches ? right : left;
        right += wordLength;
        matches++
      } else {
        while (hashTable[rightSub] < 0) {
          let leftSub = str.substring(left, left + wordLength);
          hashTable[leftSub]++;
          if (hashTable[leftSub] === 1) {
            matches--
          }
          left += wordLength;
        }
        right += wordLength;
      }
      if (matches === Object.keys(hashTable).length) {
        result_indices.push(left)
        hashTable[str.substring(left, left + wordLength)]++
        matches--
        left += wordLength
      }
    } else {
      while (matches) {
        let leftSub = str.substring(left, left + wordLength);
        hashTable[leftSub]++
        if (hashTable[leftSub] === 1) {
          matches--
        }
        left += wordLength
      }
      right++
    }
  }
  return result_indices;
};

console.log(find_word_concatenation('acatfoxafoxfoxcat', ['cat', 'fox']));

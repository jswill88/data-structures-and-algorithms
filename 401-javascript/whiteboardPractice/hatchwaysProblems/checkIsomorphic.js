// const str1 = "abab"
// const str2 = "bdbd"

// true. a -> b, b -> d

// const str3 = "abab"
// const str4 = "cdce"

// false. a -> c, b -> d, b -> e

// const str5 = "ccb"
// const str6 = "aaa"

// false. c -> a, b -> a

const str7 = 'cca'
const str8 = 'aax'

// true

function checkIsomorphic(str1, str2) {
  const hashTable = {};
  const seenValues = new Set();

  for(let i = 0; i < str1.length; i++) {
    if(hashTable[str1[i]]) {
      if (!(hashTable[str1[i]] === str2[i])) {
        return false;
      }
    }
    else {
      if(seenValues.has(str2[i])) {
        return false
      } else{
        hashTable[str1[i]] = str2[i];
        seenValues.add(str2[i])
      }
    }
  }

  return true;
}

console.log(checkIsomorphic(str7, str8));


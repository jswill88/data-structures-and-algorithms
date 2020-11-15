module.exports = (s, t) => {
  let charsInFirstString = {};

  iterate(s, char => {
    if (char in charsInFirstString) {
      charsInFirstString[char]++;
    } else {
      charsInFirstString[char] = 1;
    }
    return true
  })

  const outcome = iterate(t, char2 => {
    if (char2 in charsInFirstString) {
      if (charsInFirstString[char2] > 1) {
        charsInFirstString[char2]--;
      } else {
        delete charsInFirstString[char2]
      }
      return true;
    } else {
      return false;
    }
  })

  console.log(outcome)
  return outcome && !Object.keys(charsInFirstString).length
}

const iterate = (string, cb1) => {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const outcome = cb1(char);
    console.log(outcome)
    if (!outcome) { return false }
  }
  return true
}


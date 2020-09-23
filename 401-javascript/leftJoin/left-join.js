'use strict';

module.exports = (leftHash, rightHash) => {

  if (!(rightHash && leftHash)) { throw new Error('No values in hash table(s)') }

  let outputArray = [];

  for (let key in leftHash) {
    let keyArray = [key, leftHash[key], (rightHash[key] || null)];
    outputArray.push(keyArray);
  }

  return outputArray;
}



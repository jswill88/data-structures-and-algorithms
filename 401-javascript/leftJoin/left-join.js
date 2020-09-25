'use strict';

module.exports = (leftHash, rightHash) => {

  if (!(rightHash && leftHash)) { throw new Error('No values in hash table(s)') }

  let outputArray = [];

  for (let key in leftHash) {
    outputArray
      .push([key, leftHash[key], (key in rightHash ? rightHash[key] : null)]);
  }

  return outputArray;
}




'use strict';

const Hashtable = require('../Data-Structures/hashtable/hashtable');

module.exports = (string) => {

  let wordArray = string.toLowerCase().split(/[^\w+]/gi);
  const wordHash = new Hashtable(wordArray.length);

  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    if (wordHash.get(word)) { return word; }
    else { wordHash.add(word, word); }
  }

  throw Error('No repeating words in input');
}


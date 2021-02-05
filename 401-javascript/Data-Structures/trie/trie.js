class Trie {
  constructor() {
    this.root = new Node();
  }
  add(word, node = this.root) {
    if(!word.length) {
      node.setEnd();
      return;
    }
    const newNode = new Node()
    if(word[0] in node.keys) {
      this.add(word.slice(1), node.keys[word[0]])
    } else {
      node.keys[word[0]] = newNode;
      this.add(word.slice(1), newNode);
    }
  }
  isWord(word) {
    let current = this.root;
    let restOfWord = word;
    while(restOfWord.length) {
      if(restOfWord[0] in current.keys) {
        console.log()
        current = current.keys[restOfWord[0]];
        restOfWord = restOfWord.substr(1)
      } else {
        return false;
      }
    }
    return current.end;
  }
  allWords() {
    // return all words in trie
  }
}
class Node {
  constructor() {
    this.end = false;
    this.keys = {}
  }
  setEnd() {
    this.end = true;
  }
  isEnd() {
    return this.end;
  }
}

const trie = new Trie();
trie.add('bat');
trie.add('bra');
trie.add('brave');
trie.add('black');
trie.add('doll');
console.log(trie.root
  .keys['d']
  .keys['o']
  .keys['l']
  // .keys['v']
  // .keys['e']
);
console.log('doll', trie.isWord('doll'));
console.log('dolll', trie.isWord('dolll'));
console.log('dol', trie.isWord('dol'));


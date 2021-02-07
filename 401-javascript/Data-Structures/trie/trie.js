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
        current = current.keys[restOfWord[0]];
        restOfWord = restOfWord.substr(1)
      } else {
        return false;
      }
    }
    return current.end;
  }

  allWords() {
    const words = [];

    (function findWords (node, word = '') {
      if(node.isEnd()) words.push(word);
      for(let char in node.keys) {
        findWords(node.keys[char], word + char)
      }
    })(this.root)

    return words;
  }

  delete(word) {
    const deleteChar = (node, word) => {
      if(!word.length) {
        node.end = false;
        return;
      }
      let char = word[0]
      if(char in node.keys) {
        deleteChar(node.keys[char], word.slice(1));
        if(!Object.keys(node.keys[char].keys).length) {
          delete node.keys[char];
        }
      }
    }
    deleteChar(this.root, word);
  }

  wordsWithPrefix(prefix) {
    const words = [];
    let current = this.root;

    for(let char of prefix) {
      if(char in current.keys) {
        current = current.keys[char];
      } else {
        return words;
      }
    }

    (function findWords(node, word = '') {
      if(node.isEnd()) words.push(word);
      for(let char in node.keys) {
        findWords(node.keys[char], word + char)
      }
    })(current, prefix)

    return words;
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
trie.add('bra')
trie.add('brat');
trie.add('doll');
trie.add('brave');
trie.add('black');


console.table(trie.allWords());
console.table(trie.wordsWithPrefix('bra'));

trie.delete('black');

console.table(trie.allWords());
console.log(trie.root.keys['b'])


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
    const findWords = (node, word = '') => {
      if(node.end) words.push(word);
      for(let char in node.keys) {
        findWords(node.keys[char], word + char)
      }
    }
    findWords(this.root);
    return words;
  }

  delete(word) {
    console.log(word)
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
    const findWords = (node, word = '') => {
      console.log(node)
      if(node.end) words.push(word);
      for(let char in node.keys) {
        findWords(node.keys[char], word + char)
      }
    }
    findWords(current, prefix)
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
trie.add('brat');
trie.add('doll');
trie.add('brave');
trie.add('black');

console.table(trie.wordsWithPrefix('a'));


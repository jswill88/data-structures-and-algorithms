'use strict';

class Hashtable {
  constructor(size = 1024) {
    this.hashtable = new Array(size);
  }
  add(key, value) {
    !this.contains(key)
      ? this.hashtable[this.hash(key)] = [{ [key]: value}]
      : this.hashtable[this.hash(key)]
        .push({ [key]: value})

  }
  get(key) {
    return this.hashtable[this.hash(key)]
      ? this.hashtable[this.hash(key)]
        .filter(bucket => Object.keys(bucket)[0] === key)[0][key]
      : null;
  }

  contains (key) { return !!this.hashtable[this.hash(key)] }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return (hash * 599) % this.hashtable.length;
  }
}

module.exports = Hashtable;

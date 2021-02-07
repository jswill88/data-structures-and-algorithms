const Trie = require('./trie');

describe('Trie tests', () => {
  it('can initialize a new trie', () => {
    const trie = new Trie();
    expect(trie).toBeInstanceOf(Trie);
  });
  it('can build a trie and return all the words', () => {
    const trie = buildTrie();
    expect(trie.allWords().length).toBe(11);
  });
  it('can find words with a prefix', () => {
    const trie = buildTrie();
    const matches = trie.wordsWithPrefix('pho');
    expect(matches).toEqual(['phone','phony'])
  });
  it('returns an empty array with a prefix that does not have any matches', () => {
    const trie = buildTrie();
    expect(trie.wordsWithPrefix('art')).toEqual([])
  })
  it('can check whether a word is in the trie', () => {
    const trie = buildTrie();
    expect(trie.isWord('an')).toBeTruthy();
    expect(trie.isWord('any')).toBeFalsy();
  });
  it('can delete a word from the trie', () => {
    const trie = buildTrie();
    trie.delete('phone');
    expect(trie.isWord('phone')).toBeFalsy();
    expect(trie.isWord('phony')).toBeTruthy();
  })
  it('won\'t delete a word that is not in the trie', () => {
    const trie = buildTrie();
    trie.delete('ph');
    expect(trie.allWords().length).toBe(11);
  })
  it('adds a normalized word', () => {
    const trie = buildTrie();
    trie.add('   HI  ');
    expect(trie.isWord('hi')).toBeTruthy();
    expect(trie.isWord('pHoNe  ')).toBeTruthy();
  })
});

const buildTrie = () => {
  const trie = new Trie();
  trie.add('phone');
  trie.add('phony');
  trie.add('fig');
  trie.add('fin');
  trie.add('pillow');
  trie.add('pill');
  trie.add('an');
  trie.add('news')
  trie.add('at')
  trie.add('another');
  trie.add('ant');
  return trie;
};


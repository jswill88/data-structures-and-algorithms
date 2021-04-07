const Deque = require('collections/deque')

const generate_generalized_abbreviation = function(word) {
  const result = new Set();
  const deque = new Deque();
  deque.push(word.split(''));
  while(deque.length) {
    const currWord = deque.shift();
    result.add(currWord.join(''));
    for(let i = 0; i < currWord.length; i++) {
      if (typeof currWord[i] !== 'string') continue;
      const newWord = [...currWord];
      newWord[i] = 1;
      const reducedWord = newWord.reduce((arr, char, i) => {
        if (typeof char === 'string' || !i || typeof arr[arr.length - 1] === 'string')
          arr.push(char);
        else arr[arr.length - 1] += char;
        return arr;
      }, [])
      deque.push(reducedWord)
    }
  }
  return Array.from(result);
};


console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`)
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`);

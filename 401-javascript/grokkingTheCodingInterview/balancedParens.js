const Deque = require('collections/deque');

const generate_valid_parentheses = function (num) {
  const result = [];
  const deque = new Deque(['']);
  for (let i = 0; i < num; i++) {
    const n = deque.length
    for (let j = 0; j < n; j++) {
      const currString = deque.shift();
      const stringsToAdd = new Set([
        currString + '()',
        `(${currString})`,
        '()' + currString
      ])
      stringsToAdd.forEach(str => {
        if (i + 1 === num) result.push(str)
        else deque.push(str)
      });
    }
  }

  return result;
};

// time: O(n2^n)
// space: O(2^n)

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`)
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(4)}`);

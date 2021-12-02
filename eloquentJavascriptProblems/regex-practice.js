let match = /([^]*?)/g.exec('hi there');
console.log(match)
let replaced = '1 two 3 four'.replace(/(\d\b)/g, '$2 $1')
console.log(replaced);
const bookReplace = 'one.. two'.replace(/([a-z]+)(\.\.) ([a-z]+)/g, '$3 $1$2')
console.log(bookReplace)

const username = 'dea+h1[]rd';
let text = 'This dea+h1[]rd guy is super annoying';
let escaped = username.replace(/[\\[\].+*?(){}|^$]/g, '\\$&');
let regexp = new RegExp('\\b' + escaped + '\\b', 'gi');

console.log(text.replace(regexp, '_$&_'));


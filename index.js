//1 
const containsChar = (str, char) => {
    return str.includes(char);
}

console.log(containsChar('hello', 'e'));
console.log(containsChar('world', 'z'));
console.log(containsChar('Hello', 'h'))

//2
const reverse = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverse('listen'))
console.log(reverse('hello'))

//3
const wordsToRegister = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
  }
  return result;
}

console.log(wordsToRegister('hello'));s
console.log(wordsToRegister('test test'))

//4
const sumOfDigitsInString = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== ' ') {
      sum += Number(str[i]);
    }
  }
  return sum;
}

console.log(sumOfDigitsInString('abc123'));
console.log(sumOfDigitsInString('5 apples and 3 oranges'))

//5
const checkChars = (str, text, reversed) => {
  if (str.replaceAll(text, reversed) === str) {
    return 'Error';
  }

  return str.replaceAll(text, reversed);
}

console.log(checkChars('Test!', '!', '?'));
console.log(checkChars('Hello world', 'a', 'b')); 
console.log(checkChars('hexlet', 'e', 'o'))

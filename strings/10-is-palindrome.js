// 🔟 Задача
// Проверить, является ли строка палиндромом.
// Палиндром — это строка, которая читается одинаково слева направо и справа налево.

// Пример:
// "madam" → true
// "hello" → false

const palindromeSearchFor = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // нашли несовпадение
    }
  }
  return true; // всё совпало
};
// str[i] → символ с начала строки, индекс i
// str.length - 1 - i → индекс символа с конца строки, "зеркальный"
// str[str.length - 1 - i] → символ с конца строки
// i < str.length / 2 → достаточно проверять до середины, иначе дублируем проверку
// Сравнение должно быть не равенство (!==) → return false

// console.log(palindromeSearchFor('madam'));
// console.log(palindromeSearchFor('hello'));

const palindromeSearchWhile = (str) => {
  let i = 0;

  while (i < str.length / 2) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
};

// console.log(palindromeSearchWhile('madam'));
// console.log(palindromeSearchWhile('hello'));

const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false

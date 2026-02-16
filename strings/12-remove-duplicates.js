// 1️⃣2️⃣ Задача
// Написать функцию, которая:
// 👉 принимает строку
// 👉 возвращает строку без повторяющихся символов

// Пример:
// removeDuplicates('hello') → 'helo'
// removeDuplicates('JavaScript') → 'JavScript'

const removeDuplicates = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
};

// console.log(removeDuplicates('hello'));
// console.log(removeDuplicates('JavaScript'));

const removeDuplicatesWhile = (str) => {
  let i = 0;
  let result = '';

  while (i < str.length) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
    i++;
  }
  return result;
};

// console.log(removeDuplicatesWhile('hello'));
// console.log(removeDuplicatesWhile('JavaScript'));

const removeDuplicatesSet = (str) => [...new Set(str)].join('');

// console.log(removeDuplicatesSet('hello'));      // helo
// console.log(removeDuplicatesSet('JavaScript')); // JavScript

// 🔎 Как это работает
// new Set(str)
// Set хранит только уникальные значения

// Строка превращается в массив символов → уникальные берутся автоматически
// 'hello' → Set {'h','e','l','o'}

// [...new Set(str)]
// Превращаем Set обратно в массив

// .join('')
// Соединяем массив символов обратно в строку

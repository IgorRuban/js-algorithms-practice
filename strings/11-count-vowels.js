// 1️⃣1️⃣ Задача
// Написать функцию, которая:
// 👉 принимает строку
// 👉 возвращает количество гласных букв

// Гласные (английские):
// a, e, i, o, u

// Пример:
// countVowels('hello')
// countVowels('JavaScript')

const countVowels = (str) => {
  let countChar = 0;
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      countChar += 1;
    }
  }
  return countChar;
};

// console.log(countVowels('hello'));
// console.log(countVowels('JavaScript'));
// ✔ Приводим символ к нижнему регистру
// ✔ Проверяем, есть ли он в строке 'aeiou'
// ✔ Если да — увеличиваем счётчик

const countVowelsWhile = (str) => {
  let i = 0;
  let countChar = 0;
  let vowels = 'aeiou';

  while (i < str.length) {
    if (vowels.includes(str[i].toLowerCase())) {
      countChar += 1;
    }
    i++;
  }
  return countChar;
};

// console.log(countVowelsWhile('hello'));
// console.log(countVowelsWhile('JavaScript'));

const countVowelsMethods = (str) => {
  return str
    .toLowerCase()
    .split('')
    .filter((char) => 'aeiou'.includes(char)).length;
};

// console.log(countVowelsMethods('hello')); // 2
// console.log(countVowelsMethods('JavaScript')); // 3
// 1️⃣ toLowerCase()
// Приводим строку к нижнему регистру
// Чтобы A и a считались одинаково.
// 2️⃣ split('')
// Разбиваем строку на массив символов
// 3️⃣ filter(...)
// Оставляем только те символы, которые входят в 'aeiou'.
// 4️⃣ .length
// Берём длину полученного массива → это и есть количество гласных.

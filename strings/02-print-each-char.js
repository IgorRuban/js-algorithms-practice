// Задача №2
// Вывести каждый символ строки на новой строке.

// Пример:
// "hello"

// Результат:
// h
// e
// l
// l
// o

// Требования
// Сделай 2 способа:
// 1️⃣ Через цикл (for или while)
// 2️⃣ Через методы (split, forEach и т.д.)

// ❌ Можно использовать .length
// ❌ Не использовать готовые магические решения

// Алгоритм:
// Проходим по строке с начала до конца
// На каждой итерации выводим символ

// 1 способ через for
const nextOutputSymbols = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};
// nextOutputSymbols('hello');

// 2 способ через while
const nextOutputSymbols2 = (str) => {
  let i = 0;
  while (i < str.length) {
    console.log(str[i]);
    i++;
  }
};

// nextOutputSymbols2('hello');

// ⚔ Разница мышления: for vs while
// for
// Когда заранее известно количество итераций.
// Всё управление циклом в одной строке.
// Читается быстрее.

// while
// Когда количество итераций неизвестно.
// Нужно вручную управлять индексом.
// Больше контроля → больше риска ошибки.

// 3 Способ через методы split(''), forEach, map, join('\n')
let str = 'Hello World!';

// ✔ split('') превращает строку в массив символов
// ✔ forEach проходит по каждому элементу
str.split('').forEach((el) => console.log(el));

// ✔ join('\n') → объединяет через перенос строки
// ✔ Получается одна строка с переносами
let newString = str.split('').join('\n');
console.log(newString);

// map должен создать новый массив
// мы можем превратить каждый символ в символ + \n
// затем объединить всё в одну строку
const printEachChar = (str) => {
  return str
    .split('')
    .map((char) => char + '\n')
    .join('');
};

console.log(printEachChar('hello'));

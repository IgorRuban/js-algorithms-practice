// 9️⃣ Задача
// Перевернуть строку

// Пример:
// "hello" → "olleh"

// 1️⃣ Через цикл for
const reverseStringFor = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// console.log(reverseStringFor('hello'));
// ✔ Стартуем с последнего индекса
// ✔ Проверяем, что индекс не меньше 0
// ✔ Двигаемся назад через i--
// ✔ Добавляем символы в result

// 2️⃣ Через цикл while
const reverseStringWhile = (str) => {
  let result = '';
  let i = str.length - 1;

  while (i >= 0) {
    result += str[i];
    i--;
  }
  return result;
};

// console.log(reverseStringWhile('hello'));

// 3️⃣ Через методы (split, reverse, join)
console.log('hello'.split('').reverse().join(''));
// split('')
// Разбивает строку на массив символов.
// reverse()
// Переворачивает массив.
// join('')
// Соединяет массив обратно в строку.

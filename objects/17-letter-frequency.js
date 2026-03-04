// Задача №17: Подсчёт частоты букв
// Условие:
// Дана строка 'hello'.
// Задание: Создай объект, где ключи — буквы, а значения — количество повторений.
// Ожидаемый результат:
// {h: 1, e: 1, l: 2, o: 1}

function countLetters(str) {
  return str
    .toLowerCase()
    .split('')
    .filter((char) => /^[a-z]$/i.test(char))
    .reduce((acc, char) => {
      acc[char] = (acc[char] ?? 0) + 1;
      return acc;
    }, {});
}

// console.log(countLetters('heLlo')); // {h: 1, e: 1, l: 2, o: 1}
// console.log(countLetters('aaa')); // {a: 3}
// console.log(countLetters('hello 123!'));

function countWords(str) {
  const result = {};

  str
    .split(/\s+/) // разбить по любым пробельным символам
    .filter((word) => word) // убрать пустые строки
    .forEach((el) => {
      result[el] = (result[el] ?? 0) + 1;
    });
  return result;
}

// console.log(countWords('hello world hello'));
// console.log(countWords('one two one'));

function mostFrequent(str) {
  // 1️⃣ Получаем объект с подсчётом букв
  const counts = countLetters(str);

  // 2️⃣ Преобразуем объект в массив пар [буква, количество]
  // 3️⃣ Через reduce ищем максимальное значение
  return Object.entries(counts).reduce(
    (max, [letter, count]) => {
      // Если текущее количество больше сохранённого —
      // обновляем максимум
      if (count > max.count) {
        return { letter: letter, count: count };
      }

      // Иначе возвращаем текущий максимум без изменений
      return max;
    },
    // Начальное значение аккумулятора
    { letter: '', count: 0 },
  );
}

console.log(mostFrequent('hello')); // {letter: 'l', count: 2}
console.log(mostFrequent('aaa')); // {letter: 'a', count: 3}

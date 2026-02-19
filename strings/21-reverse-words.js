// Задача №21:
// Задача: Перевернуть каждое слово, но порядок слов оставить прежним.

// Алгоритм:
// 1. Разбить строку на массив слов (по пробелам)
// 2. Для каждого слова:
//    - Перевернуть символы в слове
// 3. Соединить слова обратно через пробел

// ✅ split() + map() + реверс через цикл

// Способ 1: split() + map() + reverse()
const reverseWordsRev = (str) => {
  return (
    str
      // Шаг 1: разбиваем строку на массив слов по пробелам
      .split(' ')
      // "hello world" → ['hello', 'world']

      // Шаг 2: map проходит по каждому слову и переворачивает его
      .map((word) => {
        // word — текущее слово из массива

        return word
          .split('') // 'hello' → ['h','e','l','l','o']
          .reverse() // ['o','l','l','e','h']
          .join(''); // 'olleh'
      })
      // Результат map: ['olleh', 'dlrow']

      // Шаг 3: соединяем слова обратно через пробел
      .join(' ')
  );
  // ['olleh', 'dlrow'] → "olleh dlrow" ✅
};

// Способ 2: for + вложенный for
const reverseWordsFor = (str) => {
  // Шаг 1: разбиваем на слова
  const words = str.split(' '); // ['hello', 'world']

  const result = []; // массив для перевёрнутых слов

  // Шаг 2: внешний цикл — идём по каждому слову
  for (let i = 0; i < words.length; i++) {
    const word = words[i]; // текущее слово
    let reversedWord = ''; // пустая строка для перевёрнутого слова

    // Шаг 3: внутренний цикл — переворачиваем символы в слове
    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j]; // добавляем символы с конца
    }

    // Шаг 4: добавляем перевёрнутое слово в результат
    result.push(reversedWord);
  }

  // Шаг 5: соединяем слова обратно через пробел
  return result.join(' ');
};

// Способ 3: for...of + встроенная функция реверса
const reverseWordsForOf = (str) => {
  // Шаг 1: вспомогательная функция для реверса одного слова
  const reverseWord = (word) => {
    let reversed = ''; // пустая строка для результата

    // идём по слову с конца к началу
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i]; // добавляем символы в обратном порядке
    }
    return reversed;
  };
  // reverseWord('hello') → 'olleh'

  // Шаг 2: разбиваем строку на массив слов
  const words = str.split(' ');
  // "hello world" → ['hello', 'world']

  // Шаг 3: массив для результата
  const result = [];

  // Шаг 4: for...of проходит по каждому слову
  // for...of даёт сразу элемент (слово), без индекса
  for (const word of words) {
    // word = 'hello'

    // переворачиваем текущее слово
    const reversed = reverseWord(word); // 'olleh'

    // добавляем в результат
    result.push(reversed);
  }
  // result = ['olleh', 'dlrow']

  // Шаг 5: соединяем слова обратно через пробел
  return result.join(' ');
  // "olleh dlrow" ✅
};

// Способ 4: split() + map() + ручной реверс через reduce()
const reverseWordsReduce = (str) => {
  // Шаг 1: разбиваем строку на массив слов
  const words = str.split(' ');
  // "hello world" → ['hello', 'world']

  // Шаг 2: map проходит по каждому слову
  return (
    words
      .map(
        (word) =>
          // Шаг 3: для каждого слова переворачиваем его через reduce
          word
            .split('') // 'hello' → ['h','e','l','l','o']
            .reduce((acc, char) => {
              // acc — накопитель (начинается с '')
              // char — текущий символ

              // Добавляем символ В НАЧАЛО accumulator
              // это и есть реверс!
              return char + acc;
            }, ''), // '' — начальное значение (пустая строка)
        // Результат reduce: 'olleh'
      )
      // После map: ['olleh', 'dlrow']

      // Шаг 4: соединяем слова обратно через пробел
      .join(' ')
  );
  // "olleh dlrow" ✅
};

// Способ 5: split() + map() + реверс через цикл в отдельной функции
const reverseWordsMap = (str) => {
  // Шаг 1: вспомогательная функция для реверса одного слова
  const reverseWord = (word) => {
    let reversed = ''; // пустая строка для результата

    // идём по слову с конца к началу
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i]; // добавляем символы в обратном порядке
    }
    return reversed;
  };
  // reverseWord('hello') → 'olleh'

  // Шаг 2: разбиваем строку на массив слов
  const words = str.split(' ');
  // "hello world" → ['hello', 'world']

  // Шаг 3: map применяет reverseWord к каждому слову
  return (
    words
      .map((word) => {
        // word — текущее слово из массива
        return reverseWord(word); // переворачиваем его
      })
      // После map: ['olleh', 'dlrow']

      // Шаг 4: соединяем слова обратно через пробел
      .join(' ')
  );
  // "olleh dlrow" ✅
};

// Примеры:
console.log(reverseWordsMap('hello world')); // "olleh dlrow"
console.log(reverseWordsMap('JavaScript is fun')); // "tpircSavaJ si nuf"
console.log(reverseWordsMap('a')); // "a"
console.log(reverseWordsMap('')); // ""
console.log(reverseWordsMap('one two three')); // "eno owt eerht"

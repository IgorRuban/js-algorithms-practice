// Задача №22:
// Задача: Заменить последовательные повторяющиеся символы на `символ + количество`.
// Сжать строку: "aaabbc" → "a3b2c1"

// Алгоритм:
// 1. Пройти по строке
// 2. Считать сколько раз подряд идёт один и тот же символ
// 3. Когда символ меняется:
//    - Добавить в результат: предыдущий_символ + его_количество
// 4. Вернуть результат

// Способ 1: for + счётчик
const compressStringFor = (str) => {
  // Шаг 1: пустая строка — возвращаем пустую строку
  if (str.length === 0) return '';

  // Шаг 2: инициализация переменных
  let currentChar = str[0]; // текущий отслеживаемый символ (первый)
  let result = ''; // результирующая строка
  let count = 1; // счётчик текущего символа (начинаем с 1)

  // Шаг 3: идём со ВТОРОГО символа (индекс 1)
  for (let i = 1; i < str.length; i++) {
    // Шаг 4: если символ такой же как предыдущий
    if (str[i] === currentChar) {
      count++; // просто увеличиваем счётчик
    }
    // Шаг 5: если символ ИЗМЕНИЛСЯ
    else {
      // записываем предыдущий символ + его количество
      result += currentChar + count;

      // начинаем отслеживать новый символ
      currentChar = str[i];
      count = 1; // сбрасываем счётчик
    }
  }

  // Шаг 6: ВАЖНО! После цикла добавляем ПОСЛЕДНИЙ символ
  // потому что цикл заканчивается и else не срабатывает
  result += currentChar + count;

  return result;
};

// Способ 2: for...of + счётчик
const compressStringForOf = (str) => {
  // Шаг 1: пустая строка — возвращаем пустую строку
  if (str.length === 0) return '';

  // Шаг 2: инициализация переменных
  let count = 0; // счётчик текущего символа
  let currentChar = null; // текущий отслеживаемый символ (пока null)
  let result = ''; // результирующая строка

  // Шаг 3: for...of проходит по каждому символу
  // char — текущий символ из строки
  for (const char of str) {
    // Шаг 4: если символ такой же как предыдущий
    if (char === currentChar) {
      count++; // увеличиваем счётчик
    }
    // Шаг 5: если символ ИЗМЕНИЛСЯ (или это первый символ)
    else {
      // ВАЖНО: проверяем что currentChar не null
      // чтобы не добавлять в результат на первой итерации
      if (currentChar !== null) {
        result += currentChar + count;
      }

      // начинаем отслеживать новый символ
      currentChar = char;
      count = 1; // сбрасываем счётчик на 1
    }
  }

  // Шаг 6: после цикла добавляем ПОСЛЕДНИЙ символ
  result += currentChar + count;

  return result;
};

// Способ 3: reduce() + объект состояния
const compressStringReduce = (str) => {
  // Шаг 1: пустая строка — возвращаем пустую строку
  if (str.length === 0) return '';

  // Шаг 2: разбиваем строку в массив символов
  const chars = str.split('');

  // Шаг 3: используем reduce с объектом состояния
  const state = chars.reduce(
    (acc, char) => {
      // acc — accumulator (объект состояния)
      // char — текущий символ

      // Шаг 4: если символ такой же как предыдущий
      if (char === acc.currentChar) {
        acc.count++; // увеличиваем счётчик
      }
      // Шаг 5: если символ ИЗМЕНИЛСЯ
      else {
        // ВАЖНО: проверяем что currentChar не пустая строка
        // чтобы не добавлять в результат на первой итерации
        if (acc.currentChar !== '') {
          acc.result += acc.currentChar + acc.count;
        }

        // начинаем отслеживать новый символ
        acc.currentChar = char;
        acc.count = 1;
      }

      // ВСЕГДА возвращаем accumulator
      return acc;
    },
    // Начальное значение accumulator — объект с тремя полями:
    { result: '', currentChar: '', count: 0 },
  );

  // Шаг 6: после reduce добавляем ПОСЛЕДНИЙ символ
  // state.result уже содержит все предыдущие символы
  // добавляем currentChar + count
  return state.result + state.currentChar + state.count;
};

// Способ 4: split('') + filter() с побочным эффектом
const compressStringFilter = (str) => {
  if (str.length === 0) return '';

  const chars = str.split('');

  // Шаг 1: создай внешние переменные
  let result = '';
  let currentChar = null;
  let count = 0;

  // Шаг 2: используй filter как цикл
  chars.filter((char) => {
    if (char === currentChar) {
      count++;
    } else {
      if (currentChar !== null) {
        result += currentChar + count;
      }
      currentChar = char;
      count = 1;
    }

    return true; // всегда возвращай true
  });

  // Шаг 3: после filter добавь последний символ
  result += currentChar + count;

  return result;
};

// Способ 5: Array.from() + reduce()
const compressStringArrayFrom = (str) => {
  // Шаг 1: пустая строка
  if (str.length === 0) return '';

  // Шаг 2: Array.from конвертирует строку в массив
  // Array.from("abc") → ['a','b','c']
  // аналог split('') но современный синтаксис
  const state = Array.from(str).reduce(
    (acc, char) => {
      // acc — объект состояния
      // char — текущий символ

      // Та же логика что в способе 3
      if (char === acc.currentChar) {
        acc.count++;
      } else {
        if (acc.currentChar !== '') {
          acc.result += acc.currentChar + acc.count;
        }
        acc.currentChar = char;
        acc.count = 1;
      }
      return acc;
    },
    {
      result: '',
      currentChar: '',
      count: 0,
    },
  );

  // Шаг 3: добавляем последний символ и возвращаем строку
  return state.result + state.currentChar + state.count;
};

// Примеры:
console.log(compressStringArrayFrom('aaabbc')); // "a3b2c1"
console.log(compressStringArrayFrom('aabbcc')); // "a2b2c2"
console.log(compressStringArrayFrom('abc')); // "a1b1c1"
console.log(compressStringArrayFrom('aaaa')); // "a4"
console.log(compressStringArrayFrom('')); // ""
console.log(compressStringArrayFrom('aabbbcccc')); // "a2b3c4"

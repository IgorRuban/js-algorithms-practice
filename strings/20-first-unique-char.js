// Задача №20:
// Найти первый неповторяющийся символ в строке
// Неповторяющийся символ — это символ, который встречается в строке ровно один раз.

// Алгоритм:
// 1. Подсчитать сколько раз каждый символ встречается в строке
// 2. Пройти по строке слева направо
// 3. Найти первый символ, который встречается ровно 1 раз
// 4. Вернуть этот символ (или undefined если таких нет)

// Способ 1: for
const firstUniqueFor = (str) => {
  // Шаг 1: пустая строка — нет уникальных символов
  if (str.length === 0) return undefined;

  // Шаг 2: создаём объект для подсчёта символов
  const count = {};

  // Шаг 3: ПЕРВЫЙ цикл — подсчитываем ВСЕ символы
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // текущий символ

    // (count[char] || 0) — если символа нет, ставим 0
    // потом +1 — увеличиваем счётчик
    count[char] = (count[char] || 0) + 1;
  }
  // После цикла: count = { a: 2, b: 2, c: 1, d: 1, e: 1 }

  // Шаг 4: ВТОРОЙ цикл — ищем ПЕРВЫЙ символ с count === 1
  // важно идти слева направо по оригинальной строке
  // чтобы найти именно ПЕРВЫЙ уникальный
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // если символ встречается ровно 1 раз — нашли!
    if (count[char] === 1) {
      return char; // возвращаем первый уникальный
    }
  }

  // Шаг 5: не нашли ни одного уникального символа
  return undefined;
};

//Способ 2: for...of + Map
const firstUniqueForOf = (str) => {
  // Шаг 1: пустая строка — нет уникальных символов
  if (str.length === 0) return undefined;

  // Шаг 2: создаём Map для подсчёта символов
  // Map — современная структура данных для пар ключ-значение
  const count = new Map();

  // Шаг 3: ПЕРВЫЙ цикл — подсчитываем ВСЕ символы
  // for...of даёт сразу символ, без индекса
  for (const char of str) {
    // count.get(char) — получить текущее значение из Map
    // count.set(char, value) — установить новое значение
    count.set(char, (count.get(char) || 0) + 1);
  }
  // После цикла: Map { 'a' => 2, 'b' => 2, 'c' => 1, 'd' => 1, 'e' => 1 }

  // Шаг 4: ВТОРОЙ цикл — ищем ПЕРВЫЙ символ с count === 1
  // используем for...of по строке (идём слева направо)
  for (const char of str) {
    // count.get(char) — получаем частоту символа из Map
    if (count.get(char) === 1) {
      return char; // нашли первый уникальный!
    }
  }

  // Шаг 5: не нашли ни одного уникального символа
  return undefined;
};

//Способ 3: reduce() + find()
const firstUniqueReduce = (str) => {
  // Шаг 1: пустая строка — нет уникальных символов
  if (str.length === 0) return undefined;

  const chars = str.split(''); // один раз разбили "aabbcde" → ['a','a','b','b','c','d','e']

  // Шаг 2: создаём объект подсчёта через reduce
  const count = chars.reduce((acc, char) => {
    // acc — накопитель (начинается с {})
    // char — текущий символ

    // подсчитываем каждый символ
    acc[char] = (acc[char] || 0) + 1;

    // ВСЕГДА возвращаем acc
    return acc;
  }, {}); // {} — начальное значение (пустой объект)
  // Результат: { a: 2, b: 2, c: 1, d: 1, e: 1 }

  // Шаг 3: используем find() на массиве символов
  // find() возвращает ПЕРВЫЙ элемент, который удовлетворяет условию
  return chars // снова разбиваем в массив
    .find((char) => count[char] === 1);
  // ищем первый символ с частотой 1
  // если не найдено — find() вернёт undefined ✅
};

// Способ 4: filter() + indexOf/lastIndexOf
const firstUniqueFilter = (str) => {
  // Шаг 1: пустая строка
  if (str.length === 0) return undefined;

  // Шаг 2: разбиваем строку в массив
  const chars = str.split('');

  // Шаг 3: фильтруем только уникальные символы
  // уникальный = первое и последнее вхождение на одной позиции
  const uniqueChars = chars.filter(
    (char) => chars.indexOf(char) === chars.lastIndexOf(char),
  );

  // Шаг 4: возвращаем первый из уникальных
  // если уникальных нет → uniqueChars = [] → uniqueChars[0] = undefined ✅
  return uniqueChars[0] || undefined;
};

// Способ 5: find() + подсчёт через filter
const firstUniqueFind = (str) => {
  // Шаг 1: пустая строка — нет уникальных символов
  if (str.length === 0) return undefined;

  // Шаг 2: разбиваем строку в массив символов
  const chars = str.split('');

  // Шаг 3: используем find() чтобы найти первый символ
  // у которого количество вхождений === 1
  return chars.find((char) => {
    // char — текущий символ из массива chars

    // Шаг 4: считаем сколько раз char встречается в chars
    // filter оставляет только совпадающие символы
    // .length — количество совпадений
    const count = chars.filter((c) => c === char).length;

    // Шаг 5: если ровно 1 раз — это наш уникальный символ!
    // find() вернёт этот символ и остановится
    return count === 1;
  });
  // Если не найдено — find() вернёт undefined ✅
};

// Примеры:
console.log(firstUniqueFind('aabbcde')); // "c"
console.log(firstUniqueFind('aabbccdd')); // undefined (или null, или "")
console.log(firstUniqueFind('abcabc')); // undefined
console.log(firstUniqueFind('swiss')); // "w"
console.log(firstUniqueFind('a')); // "a"
console.log(firstUniqueFind('')); // undefined

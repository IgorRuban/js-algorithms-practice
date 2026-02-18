// Задача №19:
// Проверить, являются ли две строки анаграммами
// Анаграмма — слова с одинаковым набором букв, но в разном порядке.

// Алгоритм:
// 1. Проверить — разная длина строк? → сразу false (не могут быть анаграммами)
// 2. Отсортировать символы первой строки
// 3. Отсортировать символы второй строки
// 4. Сравнить отсортированные строки
//    - Если одинаковые → true (анаграммы)
//    - Если разные → false (не анаграммы)

// Способ 1: sort()
const isAnagramSort = (str1, str2) => {
  // Шаг 1: если длины строк разные — не могут быть анаграммами
  // "hello" (5 букв) и "world!" (6 букв) → false сразу
  // эта проверка ускоряет код — не нужно сортировать
  if (str1.length !== str2.length) return false;

  // Шаг 2: сортируем первую строку и сравниваем со второй
  return (
    str1
      .split('') // "listen" → ['l','i','s','t','e','n']
      .sort() // сортируем → ['e','i','l','n','s','t']
      .join('') === // склеиваем → "eilnst"
    str2
      .split('') // "silent" → ['s','i','l','e','n','t']
      .sort() // сортируем → ['e','i','l','n','s','t']
      .join('') // склеиваем → "eilnst"
  );
  // "eilnst" === "eilnst" → true ✅ (анаграммы!)
};

// - ✅ Короткое и читаемое (3 строки кода)
// - ✅ Проверка длины в начале — оптимизация
// - ✅ `sort()` автоматически сортирует строки
// - ✅ Одна строка для сравнения

// Способ 2: for
const isAnagramFor = (str1, str2) => {
  // Шаг 1: если длины разные — не анаграммы
  if (str1.length !== str2.length) return false;

  // Шаг 2: создаём объект для подсчёта символов
  // будет хранить сколько раз встречается каждый символ
  const count = {};

  // Шаг 3: первый цикл — УВЕЛИЧИВАЕМ счётчики для str1
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i]; // текущий символ

    // (count[char] || 0) — если символа нет, ставим 0
    // потом +1 — увеличиваем счётчик
    count[char] = (count[char] || 0) + 1;
  }
  // После цикла: count = { l:1, i:1, s:1, t:1, e:1, n:1 }

  // Шаг 4: второй цикл — УМЕНЬШАЕМ счётчики для str2
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i]; // текущий символ

    // уменьшаем счётчик на 1
    count[char] = (count[char] || 0) - 1;
  }
  // После цикла: count = { l:0, i:0, s:0, t:0, e:0, n:0 }
  // если анаграммы — все значения должны быть 0!

  // Шаг 5: проверяем объект
  // for...in перебирает ключи объекта
  for (const key in count) {
    // если хотя бы одно значение НЕ ноль — не анаграммы
    if (count[key] !== 0) return false;
  }

  // Шаг 6: все значения = 0 → анаграммы!
  return true;
};

// Способ 3: for...of + Map(структура данных)
const isAnagramForOf = (str1, str2) => {
  // Шаг 1: если длины разные — не анаграммы
  if (str1.length !== str2.length) return false;

  // Шаг 2: создаём Map для подсчёта символов
  // Map — современная структура данных для пар ключ-значение
  // быстрее и удобнее чем обычный объект {}
  const count = new Map();

  // Шаг 3: первый for...of — УВЕЛИЧИВАЕМ счётчики для str1
  // for...of даёт сразу символ, без индекса
  for (const char of str1) {
    // count.get(char) — получить текущее значение
    // count.set(char, value) — установить новое значение
    count.set(char, (count.get(char) || 0) + 1);
  }
  // После цикла: Map { 'l' => 1, 'i' => 1, 's' => 1, 't' => 1, 'e' => 1, 'n' => 1 }

  // Шаг 4: второй for...of — УМЕНЬШАЕМ счётчики для str2
  for (const char of str2) {
    count.set(char, (count.get(char) || 0) - 1);
  }
  // После цикла: Map { 'l' => 0, 'i' => 0, 's' => 0, 't' => 0, 'e' => 0, 'n' => 0 }

  // Шаг 5: проверяем все значения Map
  // count.values() — итератор всех значений (не ключей!)
  for (const value of count.values()) {
    // если хотя бы одно значение НЕ ноль — не анаграммы
    if (value !== 0) return false;
  }

  // Шаг 6: все значения = 0 → анаграммы!
  return true;
};

// Способ 4: reduce()
const isAnagramReduce = (str1, str2) => {
  // Шаг 1: если длины разные — не анаграммы
  if (str1.length !== str2.length) return false;

  // Шаг 2: создаём объект подсчёта для str1 через reduce
  const count1 = str1
    .split('') // "listen" → ['l','i','s','t','e','n']
    .reduce((acc, char) => {
      // acc — накопитель (начинается с {})
      // char — текущий символ

      // увеличиваем счётчик для каждого символа
      acc[char] = (acc[char] || 0) + 1;

      // ВСЕГДА возвращаем acc
      return acc;
    }, {}); // {} — начальное значение (пустой объект)
  // Результат: { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }

  // Шаг 3: создаём объект подсчёта для str2 через reduce
  const count2 = str2
    .split('') // "silent" → ['s','i','l','e','n','t']
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  // Результат: { s: 1, i: 1, l: 1, e: 1, n: 1, t: 1 }

  // Шаг 4: сравниваем два объекта
  // проходим по всем ключам первого объекта
  for (const key in count1) {
    // если значения не совпадают — не анаграммы
    if (count1[key] !== count2[key]) return false;
  }

  // Шаг 5: все ключи совпали — анаграммы!
  return true;
};

// Способ 5: every()
const isAnagramEvery = (str1, str2) => {
  // Шаг 1: если длины разные — не анаграммы
  if (str1.length !== str2.length) return false;

  // Шаг 2: создаём Set уникальных символов из str1
  // Set автоматически убирает дубликаты
  // "aab" → Set { 'a', 'b' }
  const uniqueChars = new Set(str1);

  // Шаг 3: проверяем что для КАЖДОГО уникального символа
  // количество вхождений в str1 === количеству в str2

  // Array.from(uniqueChars) — конвертируем Set в массив
  // чтобы использовать метод .every()
  return Array.from(uniqueChars).every((char) => {
    // Шаг 4: считаем сколько раз char встречается в str1
    // split('') → массив символов
    // filter(c => c === char) → только совпадающие символы
    // .length → количество совпадений
    const count1 = str1.split('').filter((c) => c === char).length;

    // Шаг 5: считаем сколько раз char встречается в str2
    const count2 = str2.split('').filter((c) => c === char).length;

    // Шаг 6: если количества равны — символ проходит проверку
    // every() вернёт true только если ВСЕ символы прошли проверку
    return count1 === count2;
  });
};

// Примеры:
console.log(isAnagramEvery('listen', 'silent')); // true
console.log(isAnagramEvery('hello', 'world')); // false
console.log(isAnagramEvery('triangle', 'integral')); // true
console.log(isAnagramEvery('apple', 'pale')); // false
console.log(isAnagramEvery('', '')); // true
console.log(isAnagramEvery('a', 'a')); // true

// Как работает объект подсчёта (пример):
// // str1 = "aab", str2 = "baa"
// // После первого цикла (str1):
// count = { a: 2, b: 1 }
// // После второго цикла (iptstr2):
// count = { a: 0, b: 0 } // все нули → анаграммы! ✅
// // ---
// // str1 = "abc", str2 = "def"
// // После первого цикла (str1):
// count = { a: 1, b: 1, c: 1 }
// // После второго цикла (str2):
// count = { a: 1, b: 1, c: 1, d: -1, e: -1, f: -1 }
// // есть ненулевые → не анаграммы! ❌

// Разница между объектом и Map:
// Объект {}
// count[char] = 1
// count[char]
// for (const key in count)
// Map
// count.set(char, 1)
// count.get(char)
// for (const [key, value] of count)

// Преимущества Map над объектом:
// ✅ .get() и .set() — явные методы
// ✅ .values() — удобный итератор
// ✅ Быстрее для большого количества данных
// ✅ Ключи могут быть любого типа (не только строки)

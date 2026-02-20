// Задача №23:
// Проверить, все ли символы в строке уникальны
// Задача: Вернуть `true` если все символы уникальные (каждый встречается только 1 раз), иначе `false`.

// Алгоритм :
// 1. Способ через Set:
//    - Создать Set из строки
//    - Сравнить длину Set с длиной строки
//    - Если равны → все уникальны

// 2. Способ через объект подсчёта:
//    - Подсчитать частоту каждого символа
//    - Если хотя бы один > 1 → не уникальны

// 3. Способ через indexOf/lastIndexOf:
//    - Для каждого символа проверить
//    - Первое и последнее вхождение на одной позиции?

// Способ 1: ✅ Set + сравнение длин (самый простой!)
const hasUniqueCharsSet = (str) => {
  // Шаг 1: пустая строка — все символы уникальны (нет повторов)
  if (str.length === 0) return true;

  // Шаг 2: создаём Set из строки
  // Set автоматически убирает дубликаты
  const uniqueChars = new Set(str);
  // "hello" → Set { 'h', 'e', 'l', 'o' } — только 4 уникальных
  // "abcde" → Set { 'a', 'b', 'c', 'd', 'e' } — все 5 уникальных

  // Шаг 3: сравниваем размер Set с длиной строки
  // Если размеры равны → все символы были уникальными ✅
  // Если Set меньше → были дубликаты ❌
  return uniqueChars.size === str.length;
};

// const hasUniqueCharsSet = (str) => {
//   return new Set(str).size === str.length;
// };

// // Или совсем коротко:
// const hasUniqueCharsSet = (str) => new Set(str).size === str.length;

// Способ 2: ✅ for + объект подсчёта
const hasUniqueCharsFor = (str) => {
  // Шаг 1: создаём пустой объект для отслеживания встреченных символов
  let result = {};

  // Шаг 2: идём по каждому символу строки
  for (let i = 0; i < str.length; i++) {
    // Шаг 3: проверяем — встречали ли этот символ раньше?
    if (result[str[i]]) {
      // Символ УЖЕ есть в объекте → найден дубликат!
      return false; // сразу выходим, не уникальны ❌
    }

    // Шаг 4: отмечаем что встретили этот символ
    result[str[i]] = true;
  }

  // Шаг 5: прошли всю строку без дубликатов → все уникальны ✅
  return true;
};

//Способс3: ✅ for...of + Set добавление
const hasUniqueCharsForOf = (str) => {
  // Шаг 1: создаём пустой Set для отслеживания встреченных символов
  const uniqueChars = new Set();

  // Шаг 2: for...of проходит по каждому символу
  for (const char of str) {
    // Шаг 3: проверяем — есть ли этот символ уже в Set?
    // .has() — метод Set для проверки наличия элемента
    if (uniqueChars.has(char)) {
      // Символ УЖЕ есть в Set → найден дубликат!
      return false; // сразу выходим ❌
    }

    // Шаг 4: добавляем символ в Set
    // .add() — метод Set для добавления элемента
    uniqueChars.add(char);
  }

  // Шаг 5: прошли всю строку без дубликатов → все уникальны ✅
  return true;
};

// const set = new Set();
// set.add('a')      // добавить элемент
// set.has('a')      // true — проверить наличие
// set.delete('a')   // удалить элемент
// set.size          // размер Set
// set.clear()       // очистить всё

// Способ 4: // ✅ every() + indexOf/lastIndexOf
const hasUniqueCharsEvery = (str) => {
  return (
    str
      // Шаг 1: разбиваем строку в массив символов
      .split('')
      // "hello" → ['h','e','l','l','o']

      // Шаг 2: every проверяет что КАЖДЫЙ символ удовлетворяет условию
      .every((char) => {
        // char — текущий символ из массива

        // Шаг 3: проверяем что первое и последнее вхождение
        // символа в строке находятся на одной позиции

        // str.indexOf(char) — индекс ПЕРВОГО вхождения
        // str.lastIndexOf(char) — индекс ПОСЛЕДНЕГО вхождения

        // Если они равны → символ встречается только 1 раз ✅
        // Если разные → символ повторяется ❌
        return str.indexOf(char) === str.lastIndexOf(char);
      })
  );
  // every() вернёт true только если ВСЕ символы уникальны
};

//Способ 5: ✅ reduce() + Set
const hasUniqueCharsReduce = (str) => {
  // Шаг 1: reduce с объектом состояния
  const result = str
    .split('') // разбиваем строку в массив
    .reduce(
      (acc, char) => {
        // acc — объект состояния { set: Set, hasDuplicate: boolean }
        // char — текущий символ

        // Шаг 2: если уже нашли дубликат — просто возвращаем acc
        // (оптимизация — не проверяем остальные символы)
        if (acc.hasDuplicate) return acc;

        // Шаг 3: проверяем есть ли символ в Set
        if (acc.set.has(char)) {
          // Нашли дубликат! Помечаем флаг
          acc.hasDuplicate = true;
        } else {
          // Символ уникальный — добавляем в Set
          acc.set.add(char);
        }

        // Шаг 4: возвращаем accumulator
        return acc;
      },
      // Начальное значение — объект с пустым Set и флагом
      { set: new Set(), hasDuplicate: false },
    );

  // Шаг 5: инвертируем флаг
  // hasDuplicate = true → return false (не уникальны)
  // hasDuplicate = false → return true (все уникальны)
  return !result.hasDuplicate;
};

// Примеры:
console.log(hasUniqueCharsReduce('abcdef')); // true
console.log(hasUniqueCharsReduce('aabbcc')); // false
console.log(hasUniqueCharsReduce('hello')); // false (две 'l')
console.log(hasUniqueCharsReduce('')); // true
console.log(hasUniqueCharsReduce('a')); // true
console.log(hasUniqueCharsReduce('abcabc')); // false

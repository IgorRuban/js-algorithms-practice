// Задача №17:
// Проверить, содержит ли строка только цифры

// Твоя задача:
// Напиши функцию onlyDigits(str) которая возвращает true если строка содержит только цифры, и false в любом другом случае.

// Сравнение всех способов:
// for          классический Явная логика Редко
// for...of     Чище чем for Иногда
// every()      Очень читаемо✅ Часто
// isNaN()      Коротко✅ Часто
// Number()     Коротко Иногда
// Array.from() Читаемо Иногда

// Алгоритм:
// 1. Проверить — строка пустая? → вернуть false
// 2. Пройти по каждому символу строки
// 3. Для каждого символа проверить — это цифра?
//    - Цифра: символ от '0' до '9'
//    - Если НЕ цифра → сразу вернуть false
// 4. Если все символы прошли проверку → вернуть true

// Способ 1: классический for
const onlyDigitsFor = (str) => {
  // Шаг 1: сразу отсекаем пустую строку
  if (str.length === 0) return false;

  // Шаг 2: идём по каждому символу через индекс
  for (let i = 0; i < str.length; i++) {
    // Шаг 3: если символ НЕ в диапазоне '0'-'9' — не цифра
    if (!(str[i] >= '0' && str[i] <= '9')) {
      return false; // сразу выходим — уже не только цифры
    }
  }
  // Шаг 4: все символы прошли проверку — только цифры
  return true;
};

// Способ 2: for...of
const onlyDigitsForOf = (str) => {
  // Шаг 1: пустая строка — false
  if (str.length === 0) return false;

  // Шаг 2:for...of даёт сразу символ, без индекса
  // чище чем классический for — не нужна переменная i
  for (const chur of str) {
    // вне диапазона цифр → выходим
    if (chur < '0' || chur > '9') {
      return false;
    }
  }

  // Шаг 4: все символы — цифры
  return true;
};

// Способ 3: every()
const onlyDigitsEvery = (str) => {
  // Шаг 1: пустая строка — false
  if (str.length === 0) return false;

  // Шаг 2: split('') разбивает строку в массив символов
  // "123" → ['1', '2', '3']

  // Шаг 3: every() проверяет что КАЖДЫЙ символ — цифра
  // если хотя бы один не цифра — every() вернёт false
  return str.split('').every((char) => char >= '0' && char <= '9');
};

// Способ 4: isNaN()
const onlyDigitsIsNaN = (str) => {
  // Шаг 1: пустая строка — false
  if (str.length === 0) return false;

  // isNaN("123") → false (это число, не NaN)
  // isNaN("12a") → true (это не число, это NaN)
  // ! инвертирует результат:
  // !isNaN("123") → true (только цифры)
  // !isNaN("12a") → false (есть не цифры)

  // Дополнительно проверяем пробелы:
  // isNaN("1 2") → false, но "1 2" не только цифры!
  // ✔ это число ✔ и без пробелов
  return !isNaN(str) && !str.includes(' ');
};

// Способ 5: Number()
const onlyDigitsNumber = (str) => {
  // Шаг 1: пустая строка — false
  if (str.length === 0) return false;

  // Number("123") → 123 (валидное число)
  // Number("12a") → NaN (не число)
  // Number.isInteger() проверяет что результат целое число
  // Дополнительно исключаем пробелы как в способе 4
  return Number.isInteger(Number(str)) && !str.includes(' ');
};

// Способ 6: Array.from()
const onlyDigitsArrayFrom = (str) => {
  // Шаг 1: пустая строка — false
  if (str.length === 0) return false;

  // Array.from(str) — другой способ разбить строку в массив
  // Array.from("123") → ['1', '2', '3']
  // Аналог split('') но более современный синтаксис

  // every() + isNaN() для каждого символа:
  // isNaN('1') → false → !false → true (это цифра)
  // isNaN('a') → true → !true → false (не цифра)
  return Array.from(str).every((char) => !isNaN(char));
};

// console.log(onlyDigitsArrayFrom('12345'));
// console.log(onlyDigitsArrayFrom('123a5'));
// console.log(onlyDigitsArrayFrom('00099'));
// console.log(onlyDigitsArrayFrom(''));
// console.log(onlyDigitsArrayFrom('3.14'));

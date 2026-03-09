/**
 * 📋 Задача:
 * Написать функцию executeWithArgument, которая принимает
 * функцию и значение, и вызывает функцию передавая ей это значение.
 *
 * 💡 Ключевые идеи:
 * - функция может принимать несколько аргументов
 * - параметры — переменные в определении функции (fn, value)
 * - аргументы — значения при вызове fn(value)
 * - если передать undefined — callback получит undefined
 *
 * ⚠️ Частые ошибки:
 * - fn()        → вызываем без аргумента, value теряется
 * - fn(value()) → пытаемся вызвать value как функцию
 */

function executeWithArgument(fn, value) {
  return fn(value);
}

// --- Примеры ---

// Строка
executeWithArgument((name) => console.log(`Hello, ${name}!`), 'Alice');
// → "Hello, Alice!"

// Число
executeWithArgument((num) => console.log(num * 2), 5);
// → 10

// undefined
executeWithArgument((name) => console.log(`Hello, ${name}!`), undefined);
// → "Hello, undefined!"

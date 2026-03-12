/**
 * 📋 Задача:
 * Написать функцию transform, которая принимает значение и функцию,
 * и возвращает результат применения функции к значению.
 *
 * 💡 Ключевые идеи:
 * - transform(value, fn) → fn(value)
 * - функция возвращает результат callback а не само значение
 * - работает с любым типом данных: число, строка, массив
 * - основа метода .map() для одного значения
 *
 * ⚠️ Частые ошибки:
 * - return val  → возвращаем исходное значение а не результат
 * - fn(val, fn) → передаём лишний аргумент
 */

function transform(val, fn) {
  return fn(val);
}

// --- Примеры ---

console.log(transform(5, (x) => x * 2));
// → 10

console.log(transform('hello', (str) => str.toUpperCase()));
// → "HELLO"

console.log(transform([1, 2, 3], (arr) => arr.length));
// → 3

console.log(transform(null, (x) => (x === null ? 'empty' : x)));
// → "empty"

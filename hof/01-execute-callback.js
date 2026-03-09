/**
 * 📋 Задача:
 * Написать функцию execute, которая принимает функцию
 * как аргумент и вызывает её.
 *
 * 💡 Ключевые идеи:
 * - функцию можно передать как аргумент
 * - передать функцию ≠ вызвать функцию
 * - return fn() делает execute универсальным:
 *   работает и для side effects и для возврата значений
 *
 * ⚠️ Частые ошибки:
 * - return fn      → передаём но не вызываем
 * - execute(fn())  → передаём результат а не функцию
 */

function execute(fn) {
  return fn();
}

// --- Примеры ---

// Side effect
execute(() => console.log('Hello!'));
// → "Hello!"

// Возврат значения
console.log(execute(() => 42));
// → 42

console.log(execute(() => 'hello'.toUpperCase()));
// → "HELLO"

// Передача именованной функции
function sayHi() {
  return 'Hi!';
}
console.log(execute(sayHi));
// → "Hi!"

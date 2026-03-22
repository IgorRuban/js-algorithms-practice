/**
 * 📋 Задача:
 * Написать функцию compose, которая работает как pipe
 * но применяет функции справа налево.
 *
 * 💡 Ключевые идеи:
 * - compose это pipe в обратном порядке
 * - fns.reverse() разворачивает массив функций
 * - reduce передаёт результат каждой функции в следующую
 * - [...fns].reverse() безопаснее — не мутирует оригинальный массив
 *
 * ⚠️ Частые ошибки:
 * - reverse(fns) → reverse это метод массива а не отдельная функция
 * - fns.reverse() мутирует оригинальный массив — лучше [...fns].reverse()
 */

function compose(...fns) {
  return function (value) {
    return [...fns]
      .reverse() // разворачиваем массив функций
      .reduce((acc, fn) => fn(acc), value); // передаём значение через каждую функцию
  };
}

// --- Примеры ---

const transform = compose(
  (x) => x * x,
  (x) => x + 1,
  (x) => x * 2,
);

console.log(transform(3)); // → 49
console.log(transform(2)); // → 25

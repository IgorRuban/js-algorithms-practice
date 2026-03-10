/**
 * 📋 Задача:
 * Написать функцию executeWithMultipleArguments, которая принимает
 * функцию и несколько значений, и вызывает функцию передавая ей все значения.
 *
 * 💡 Ключевые идеи:
 * - ...args собирает все аргументы после fn в массив
 * - fn(...args) разворачивает массив обратно в аргументы
 * - универсальнее чем (fn, val1, val2) — работает для любого количества
 *
 * ⚠️ Частые ошибки:
 * - fn(args)   → передаём массив а не отдельные аргументы
 * - fn(...fn)  → spread на неправильной переменной
 */

function executeWithMultipleArguments(fn, ...args) {
  return fn(...args);
}

// --- Примеры ---

// Числа
executeWithMultipleArguments((a, b) => console.log(a + b), 3, 5);
// → 8

// Строки
executeWithMultipleArguments(
  (a, b) => console.log(`${a} ${b}`),
  'Hello',
  'World',
);
// → "Hello World"

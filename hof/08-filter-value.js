/**
 * 📋 Задача:
 * Написать функцию filterValue, которая принимает значение и предикат,
 * и возвращает значение если предикат true, или null если false.
 *
 * 💡 Ключевые идеи:
 * - предикат — функция которая возвращает true или false
 * - filterValue возвращает само значение а не true/false
 * - работает даже с falsy значениями (0, "") если предикат true
 * - альтернатива: тернарный оператор fn(val) ? val : null
 *
 * ⚠️ Частые ошибки:
 * - return fn(val)  → возвращаем true/false а не само значение
 * - val без return  → значение теряется
 */

function filterValue(val, fn) {
  if (fn(val)) {
    return val;
  } else {
    return null;
  }
}

// --- Примеры ---

console.log(filterValue(10, (x) => x > 5));
// → 10

console.log(filterValue(3, (x) => x > 5));
// → null

console.log(filterValue('hello', (str) => str.length > 3));
// → "hello"

console.log(filterValue(0, (x) => x === 0));
// → 0

console.log(filterValue('', (str) => str.length === 0));
// → ""

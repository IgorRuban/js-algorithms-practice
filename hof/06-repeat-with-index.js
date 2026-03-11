/**
 * feat(hof): repeat callback with index (#6)
 *
 * 📋 Задача:
 * Написать функцию repeatWithIndex, которая принимает функцию и число n,
 * и вызывает функцию n раз передавая ей текущий индекс.
 *
 * 💡 Ключевые идеи:
 * - счётчик i в цикле — это и есть текущий индекс
 * - fn(i) передаёт индекс в callback при каждом вызове
 * - индекс начинается с 0 и заканчивается на n-1
 * - массив не нужен — i это просто счётчик шага
 *
 * ⚠️ Частые ошибки:
 * - fn()   → callback не получает индекс
 * - fn(n)  → передаём общее количество а не текущий шаг
 */

function repeatWithIndex(fn, n) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

// --- Примеры ---

repeatWithIndex((i) => console.log(i), 3);
// → 0
// → 1
// → 2

repeatWithIndex((i) => console.log(`Step ${i}`), 3);
// → "Step 0"
// → "Step 1"
// → "Step 2"

repeatWithIndex((i) => console.log(i * 2), 4);
// → 0
// → 2
// → 4
// → 6

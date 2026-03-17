/**
 * 📋 Задача:
 * Написать функцию memoize, которая принимает функцию
 * и возвращает её мемоизированную версию.
 * Повторные вызовы с тем же аргументом возвращают кэшированный результат.
 *
 * 💡 Ключевые идеи:
 * - cache живёт внутри memoize но снаружи возвращаемой функции — это closure
 * - arg in cache проверяет был ли уже такой аргумент
 * - ключ кэша — аргумент, значение — результат вычисления
 * - fn вызывается только если результата ещё нет в кэше
 *
 * ⚠️ Частые ошибки:
 * - cache внутри возвращаемой функции → сбрасывается при каждом вызове
 * - cache снаружи memoize → общий для всех мемоизированных функций
 * - забыть return cache[arg] → не возвращаем кэшированный результат
 */

function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    }

    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

// --- Примеры ---

const slowSquare = (n) => {
  console.log(`Вычисляю ${n}...`);
  return n * n;
};

const fastSquare = memoize(slowSquare);

console.log(fastSquare(4)); // Вычисляю 4... → 16
console.log(fastSquare(4)); // → 16 (без вычисления!)
console.log(fastSquare(5)); // Вычисляю 5... → 25

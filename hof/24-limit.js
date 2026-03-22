/**
 * 📋 Задача:
 * Написать функцию limit, которая принимает функцию и число n.
 * Возвращает новую функцию которую можно вызвать не более n раз.
 * После n вызовов возвращает undefined.
 *
 * 💡 Ключевые идеи:
 * - counter живёт внутри limit снаружи возвращаемой функции — closure
 * - counter === n проверяет исчерпан ли лимит
 * - counter увеличивается ДО вызова fn — иначе код после return не выполнится
 * - похоже на once но вместо флага используем счётчик
 *
 * ⚠️ Частые ошибки:
 * - return fn(arg) перед counter += 1 → счётчик никогда не увеличится
 * - fn() без аргумента → аргумент не передаётся в fn
 * - if снаружи возвращаемой функции → выполнится один раз при создании
 */

function limit(fn, n) {
  // счётчик вызовов
  let counter = 0;

  return function (arg) {
    if (counter === n) {
      return undefined; // лимит исчерпан — возвращаем undefined
    }
    counter += 1; // увеличиваем счётчик
    return fn(arg); // вызываем fn и возвращаем результат
  };
}

// --- Примеры ---

const limited = limit((x) => x * 2, 3);

console.log(limited(5)); // → 10
console.log(limited(3)); // → 6
console.log(limited(2)); // → 4
console.log(limited(1)); // → undefined
console.log(limited(8)); // → undefined

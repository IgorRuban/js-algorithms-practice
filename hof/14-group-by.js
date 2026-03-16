/**
 * 📋 Задача:
 * Написать функцию groupBy, которая принимает массив и callback,
 * и возвращает объект где ключи — результат callback,
 * а значения — массивы элементов с этим ключом.
 *
 * 💡 Ключевые идеи:
 * - callback возвращает ключ а не true/false
 * - сохраняем ключ в переменную: const key = callback(arr[i])
 * - если ключа нет — создаём пустой массив result[key] = []
 * - всегда делаем push после проверки — чище чем if/else с двумя push
 *
 * ⚠️ Частые ошибки:
 * - использовать arr[i] как ключ вместо callback(arr[i])
 * - push на undefined — сначала нужно создать массив
 * - if/else с двумя push — дублирование кода
 */

function groupBy(arr, callback) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const key = callback(arr[i]);

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(arr[i]);
  }
  return result;
}

// --- Примеры ---

console.log(groupBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? 'even' : 'odd')));
// → { odd: [1, 3, 5], even: [2, 4] }

console.log(groupBy(['apple', 'banana', 'cherry', 'avocado'], (str) => str[0]));
// → { a: ['apple', 'avocado'], b: ['banana'], c: ['cherry'] }

/**
 * 📋 Задача:
 * Написать функцию countBy, которая принимает массив и callback,
 * и возвращает количество элементов для которых callback вернул true.
 *
 * 💡 Ключевые идеи:
 * - заводим счётчик count = 0
 * - if (callback(arr[i])) проверяет подходит ли элемент
 * - count++ увеличивает счётчик только если callback вернул true
 * - возвращаем число а не массив
 *
 * ⚠️ Частые ошибки:
 * - return count внутри цикла → вернём счётчик после первого совпадения
 * - забыть if → считаем все элементы а не только подходящие
 */

function countBy(arr, callback) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      count++;
    }
  }
  return count;
}

// --- Примеры ---

console.log(countBy([1, 2, 3, 4, 5], (n) => n % 2 === 0));
// → 2

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 3));
// → 2

console.log(countBy(['apple', 'banana', 'cherry'], (str) => str.length > 5));
// → 2

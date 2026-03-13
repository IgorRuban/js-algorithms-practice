/**
 * 📋 Задача:
 * Написать функцию findElement, которая принимает массив и callback,
 * и возвращает первый элемент для которого callback вернул true.
 * Если такого элемента нет — вернуть undefined.
 *
 * 💡 Ключевые идеи:
 * - цикл перебирает массив и передаёт каждый элемент в callback
 * - if (callback(arr[i])) проверяет результат без явного === true
 * - return arr[i] внутри цикла останавливает перебор сразу при нахождении
 * - return undefined после цикла срабатывает только если ничего не найдено
 * - это ручная реализация встроенного .find()
 *
 * ⚠️ Частые ошибки:
 * - return callback(arr[i])    → возвращаем true/false вместо элемента
 * - return arr[i] без if       → возвращаем первый элемент всегда
 * - return undefined внутри if → никогда не вернём найденный элемент
 */

function findElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

// --- Примеры ---

console.log(findElement([1, 3, 5, 8, 10], (n) => n % 2 === 0));
// → 8

console.log(findElement([1, 3, 5], (n) => n % 2 === 0));
// → undefined

console.log(
  findElement(['apple', 'banana', 'cherry'], (str) => str.startsWith('b')),
);
// → "banana"

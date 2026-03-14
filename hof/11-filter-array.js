/**
 * 📋 Задача:
 * Написать функцию filterArray, которая принимает массив и callback,
 * и возвращает новый массив только с теми элементами,
 * для которых callback вернул true.
 *
 * 💡 Ключевые идеи:
 * - создаём новый массив а не мутируем исходный
 * - if (callback(arr[i])) проверяет подходит ли элемент
 * - result.push(arr[i]) добавляет элемент только если callback вернул true
 * - если callback вернул false — элемент просто пропускается
 * - это ручная реализация встроенного .filter()
 *
 * ⚠️ Частые ошибки:
 * - result.push(callback(arr[i])) → кладём true/false вместо элемента
 * - return arr[i] внутри if       → возвращаем первый подходящий элемент как в find
 * - забыть return result           → функция вернёт undefined
 */

function filterArray(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// --- Примеры ---

console.log(filterArray([1, 2, 3, 4, 5], (n) => n % 2 === 0));
// → [2, 4]

console.log(filterArray([1, 2, 3, 4, 5], (n) => n > 3));
// → [4, 5]

console.log(
  filterArray(['apple', 'banana', 'cherry'], (str) => str.length > 5),
);
// → ["banana", "cherry"]

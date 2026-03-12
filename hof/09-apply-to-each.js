/**
 * 📋 Задача:
 * Написать функцию applyToEach, которая принимает массив и функцию,
 * и возвращает новый массив где каждый элемент трансформирован через callback.
 *
 * 💡 Ключевые идеи:
 * - создаём новый массив а не мутируем исходный
 * - fn(arr[i]) применяет callback к каждому элементу
 * - newArr.push(fn(arr[i])) кладёт результат в новый массив
 * - это ручная реализация встроенного .map()
 *
 * ⚠️ Частые ошибки:
 * - fn(newArr.push(arr[i])) → передаём в fn результат push а не элемент
 * - newArr.push(arr[i])     → кладём исходный элемент без трансформации
 * - return arr              → возвращаем исходный массив а не новый
 */

function applyToEach(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

// --- Примеры ---

console.log(applyToEach([1, 2, 3], (x) => x * 2));
// → [2, 4, 6]

console.log(applyToEach(['hello', 'world'], (str) => str.toUpperCase()));
// → ["HELLO", "WORLD"]

console.log(applyToEach([1, 2, 3], (x) => x * x));
// → [1, 4, 9]

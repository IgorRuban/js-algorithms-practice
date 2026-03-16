/**
 * 📋 Задача:
 * Написать функцию mapAndFilter, которая принимает массив,
 * функцию трансформации и функцию фильтрации.
 * Сначала трансформирует каждый элемент через mapFn,
 * потом фильтрует результат через filterFn.
 *
 * 💡 Ключевые идеи:
 * - два отдельных массива — newArr для трансформации, result для фильтрации
 * - фильтруем уже трансформированные элементы а не исходные
 * - нельзя пушить в массив по которому итерируемся — бесконечный цикл
 * - это комбинация .map() и .filter()
 *
 * ⚠️ Частые ошибки:
 * - фильтровать arr[i] вместо newArr[i] → фильтруем исходные элементы
 * - пушить в result и итерироваться по нему же → бесконечный цикл
 */

function mapAndFilter(arr, mapFn, filterFn) {
  const newArr = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(mapFn(arr[i]));
  }

  for (let i = 0; i < newArr.length; i++) {
    if (filterFn(newArr[i])) {
      result.push(newArr[i]);
    }
  }

  return result;
}

// --- Примеры ---

console.log(
  mapAndFilter(
    [1, 2, 3, 4, 5],
    (n) => n * 2,
    (n) => n > 4,
  ),
);
// → [6, 8, 10]

console.log(
  mapAndFilter(
    ['hello', 'hi', 'world'],
    (str) => str.toUpperCase(),
    (str) => str.length > 4,
  ),
);
// → ['HELLO', 'WORLD']

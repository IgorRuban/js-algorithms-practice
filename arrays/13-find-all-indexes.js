// 🎯 Задача №13: Найти все индексы заданного элемента
// Реальный кейс: Все позиции слова в тексте, все вхождения товара в заказах.

// Условие:
// Напиши функцию findAllIndexes(arr, value), которая возвращает массив всех индексов, где встречается value. Если не найдено — пустой массив [].

// Способ 1: Цикл for
function findAllIndexes(arr, value) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) result.push(i);
  }
  return result;
}

// ------------------------------------------------

// Способ 2: reduce
function findAllIndexesR(arr, value) {
  return arr.reduce((indexes, element, index) => {
    if (element === value) indexes.push(index);
    return indexes;
  }, []);
}

// --------------------------------------------------

// Способ 3: map() filter()
function findAllIndexesM(arr, value) {
  return arr
    .map((element, index) => (element === value ? index : null))
    .filter((index) => index !== null);
}

// Примеры:
console.log(findAllIndexesM([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 5]
console.log(findAllIndexesM(['a', 'b', 'a', 'c'], 'a')); // [0, 2]
console.log(findAllIndexesM([5, 5, 5], 5)); // [0, 1, 2]
console.log(findAllIndexesM([1, 2, 3], 9)); // []
console.log(findAllIndexesM([], 1)); // []

// // Найти все позиции слова в массиве слов
// const words = ['cat', 'dog', 'cat', 'bird', 'cat'];
// const catPositions = findAllIndexes(words, 'cat');
// // [0, 2, 4]

// // Найти все вхождения товара в заказах
// const orders = [101, 202, 101, 303, 101];
// const product101Orders = findAllIndexes(orders, 101);
// // [0, 2, 4]

// // Найти все дни с нулевыми продажами
// const sales = [100, 0, 200, 0, 150];
// const zeroDays = findAllIndexes(sales, 0);
// // [1, 3]

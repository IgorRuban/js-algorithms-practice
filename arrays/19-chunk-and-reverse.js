// 🎯 Задача №19: Развернуть массив частями (chunk и reverse)
// Реальный кейс: Обработка данных блоками, пагинация с изменением порядка.
// Условие:
// Напиши функцию chunkAndReverse(arr, size), которая:

function chunkAndReverse(arr, size) {
  let result = [];
  let chunk = [];
  for (let i = 0; i < arr.length; i += size) {
    chunk = arr.slice(i, i + size);
    result.push([...chunk].reverse());
  }

  return result;
}

// Тесты:
console.log(chunkAndReverse([1, 2, 3, 4, 5, 6], 2));
// [[2, 1], [4, 3], [6, 5]]

console.log(chunkAndReverse([1, 2, 3, 4, 5], 2));
// [[2, 1], [4, 3], [5]]

console.log(chunkAndReverse([1, 2, 3, 4], 3));
// [[3, 2, 1], [4]]

console.log(chunkAndReverse([1, 2, 3], 5));
// [[3, 2, 1]]

console.log(chunkAndReverse([], 2));
// []

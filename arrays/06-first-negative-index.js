// 🎯 Задача №6: Найти индекс первого отрицательного числа
// Реальный кейс: Анализ транзакций — найти первую операцию с убытком.
// Условие:
// Напиши функцию findFirstNegativeIndex(arr), которая возвращает индекс первого отрицательного числа. Если отрицательных нет — вернуть -1.

// Способ 1: Цикл for
function findFirstNegativeIndexFor(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return i; // ✅ Сразу выходим
  }
  return -1; // ✅ Если ничего не нашли
}

// ---------------------------------------

// Способ 2: Метод массива
function findFirstNegativeIndexFin(arr) {
  return arr.findIndex(num => num < 0);
}

// Тесты:
console.log(findFirstNegativeIndexFin([1, 2, -3, 4, -5])); // 2
console.log(findFirstNegativeIndexFin([10, 20, 30])); // -1
console.log(findFirstNegativeIndexFin([-1, 2, 3])); // 0
console.log(findFirstNegativeIndexFin([0, 5, -10])); // 2
console.log(findFirstNegativeIndexFin([])); // -1

// // Найти первый просроченный платёж
// const payments = [
//   {amount: 1000, days: 5},
//   {amount: 500, days: -2},   // просрочка!
//   {amount: 200, days: 10}
// ];

// const overdueIndex = payments.findIndex(p => p.days < 0);
// // 1
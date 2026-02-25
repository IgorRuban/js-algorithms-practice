// 🎯 Задача №15: Разделить массив на чётные и нечётные числа
// Реальный кейс: Разделение транзакций на доходы/расходы, пользователей на активных/неактивных.
// Условие:
// Напиши функцию splitEvenOdd(arr), которая возвращает объект с двумя массивами: even (чётные) и odd (нечётные).

// Способ 1: Два filter() (проще)
function splitEvenOdd(arr) {
  return {
    even: arr.filter((num) => num % 2 === 0),
    odd: arr.filter((num) => num % 2 !== 0),
  };
}

// ----------------------------------------

// Способ 2: Один reduce() (один проход)
function splitEvenOddR(arr) {
  return arr.reduce(
    (result, num) => {
      if (num % 2 === 0) {
        result.even.push(num);
      } else {
        result.odd.push(num);
      }
      return result;
    },
    { even: [], odd: [] },
  );
}
//  (num % 2 === 0 ? result.even : result.odd).push(num);

// Примеры:
console.log(splitEvenOddR([1, 2, 3, 4, 5, 6]));
// // { even: [2, 4, 6], odd: [1, 3, 5] }
console.log(splitEvenOddR([10, 15, 20, 25]));
// // { even: [10, 20], odd: [15, 25] }
console.log(splitEvenOddR([1, 3, 5]));
// // { even: [], odd: [1, 3, 5] }
console.log(splitEvenOddR([2, 4, 6]));
// // { even: [2, 4, 6], odd: [] }
console.log(splitEvenOddR([]));
// // { even: [], odd: [] }

// // Разделение транзакций
// const transactions = [100, -50, 200, -30, 150];
// const { even: positive, odd: negative } = splitEvenOdd(transactions);
// // Можно адаптировать для положительных/отрицательных

// // Разделение пользователей
// const userIds = [1, 2, 3, 4, 5, 6];
// const { even: group1, odd: group2 } = splitEvenOdd(userIds);
// // group1: [2, 4, 6], group2: [1, 3, 5]

// // A/B тестирование
// const ids = Array.from({length: 1000}, (_, i) => i);
// const { even: groupA, odd: groupB } = splitEvenOdd(ids);
// // Разделение пользователей на две группы

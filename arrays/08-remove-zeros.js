// 🎯 Задача №8: Удалить все нули из массива
// Реальный кейс: Очистка данных от пустых/нулевых значений перед отправкой на сервер.
// Условие:
// Напиши функцию removeZeros(arr), которая возвращает новый массив без нулей.

// Способ 1: Цикл for + push
function removeZeros(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) result.push(arr[i]); // ✅ Добавляем только не-нули
  }
  return result;
}

// -----------------------------------------------------------------------

// Способ 2: Метод .filter()
function removeZerosFil(arr) {
  return arr.filter((num) => num !== 0);
}

// Примеры:
console.log(removeZerosFil([0, 1, 0, 2, 3])); // [1, 2, 3]
console.log(removeZerosFil([5, 0, 10, 0])); // [5, 10]
console.log(removeZerosFil([0, 0, 0])); // []
console.log(removeZerosFil([1, 2, 3])); // [1, 2, 3]
console.log(removeZerosFil([])); // []

// // Убрать пустые строки
// const comments = ['Отлично!', '', 'Супер', ''];
// const valid = comments.filter(c => c !== '');  // ['Отлично!', 'Супер']

// // Оставить только активных пользователей
// const users = [{id: 1, active: true}, {id: 2, active: false}];
// const active = users.filter(u => u.active);

// // Убрать дубликаты null/undefined
// const data = [1, null, 2, undefined, 3];
// const clean = data.filter(x => x != null);  // [1, 2, 3]

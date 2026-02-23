// 🎯 Задача №7: Проверить, есть ли в массиве число больше 100
// Реальный кейс: Проверка лимитов транзакций — есть ли операции выше порога.
// Условие:
// Напиши функцию hasNumberAbove100(arr), которая возвращает true, если хотя бы одно число больше 100. Иначе — false.

// Способ 1: Цикл for
function hasNumberAbove100For(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) return true; // ✅ Ранний выход
  }
  return false; // ✅ Если ничего не нашли
}

// ----------------------------------------------------

// Способ 2: Метод .some()
function hasNumberAbove100(arr) {
  return arr.some((num) => num > 100);
}

// Примеры:
console.log(hasNumberAbove100For([50, 75, 101])); // true
console.log(hasNumberAbove100For([10, 20, 30])); // false
console.log(hasNumberAbove100For([100, 99, 98])); // false (100 не больше!)
console.log(hasNumberAbove100For([200])); // true
console.log(hasNumberAbove100For([])); // false

// // Есть ли непрочитанные сообщения?
// const messages = [{id: 1, read: true}, {id: 2, read: false}];
// const hasUnread = messages.some(msg => !msg.read);  // true

// // Есть ли товары в корзине дороже 1000₽?
// const cart = [{price: 500}, {price: 1500}];
// const hasExpensive = cart.some(item => item.price > 1000);  // true

// // Есть ли совершеннолетние пользователи?
// const users = [{age: 17}, {age: 25}];
// const hasAdults = users.some(u => u.age >= 18);  // true

// 💡 .every():
// Если .some() = "хотя бы один", то .every() = "все":
// [2, 4, 6].every(num => num % 2 === 0)  // true (все чётные)
// [2, 3, 6].every(num => num % 2 === 0)  // false (не все чётные)

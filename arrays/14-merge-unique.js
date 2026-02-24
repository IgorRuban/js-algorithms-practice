// 🎯 Задача №14: Объединить два массива без дубликатов
// Реальный кейс: Слияние списков подписчиков из разных источников, объединение тегов статей.
// Условие:
// Напиши функцию mergeUnique(arr1, arr2), которая возвращает новый массив с уникальными элементами из обоих массивов.

// Способ 1: Spread + Set
function mergeUniqueSpread(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// --------------------------------------

// Способ 2: concat() + Set
function mergeUniqueCon(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

// Примеры:
console.log(mergeUniqueCon([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeUniqueCon(['a', 'b'], ['b', 'c', 'd'])); // ['a', 'b', 'c', 'd']
console.log(mergeUniqueCon([1, 1, 2], [2, 3, 3])); // [1, 2, 3]
console.log(mergeUniqueCon([], [1, 2])); // [1, 2]
console.log(mergeUniqueCon([1, 2], [])); // [1, 2]

// // Объединение подписчиков из двух источников
// const emailList1 = ['user1@mail.com', 'user2@mail.com'];
// const emailList2 = ['user2@mail.com', 'user3@mail.com'];
// const allSubscribers = mergeUnique(emailList1, emailList2);
// // ['user1@mail.com', 'user2@mail.com', 'user3@mail.com']

// // Слияние тегов статей
// const tags1 = ['js', 'react', 'node'];
// const tags2 = ['react', 'vue', 'js'];
// const allTags = mergeUnique(tags1, tags2);
// // ['js', 'react', 'node', 'vue']

// // Объединение списков товаров
// const cart1 = [101, 202, 303];
// const cart2 = [202, 404, 101];
// const allProducts = mergeUnique(cart1, cart2);
// // [101, 202, 303, 404]

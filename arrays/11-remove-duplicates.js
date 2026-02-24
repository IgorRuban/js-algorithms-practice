// 🚀 Задача №11: Удалить дубликаты из массива
// Реальный кейс: Очистка списка email от повторов перед рассылкой.
// Условие:
// Напиши функцию removeDuplicates(arr), которая возвращает новый массив без дубликатов (уникальные элементы).

// Способ 1: Set + spread
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// --------------------------------

// Способ 2: Set + Array.from()
function removeDuplicatesArray(arr) {
  return Array.from(new Set(arr));
}

// Примеры:
console.log(removeDuplicatesArray([1, 2, 2, 3, 3, 3])); // [1, 2, 3]
console.log(removeDuplicatesArray(['a', 'b', 'a', 'c'])); // ['a', 'b', 'c']
console.log(removeDuplicatesArray([1, 1, 1])); // [1]
console.log(removeDuplicatesArray([])); // []

// // Уникальные email для рассылки
// const emails = ['user@mail.com', 'admin@mail.com', 'user@mail.com'];
// const unique = [...new Set(emails)];
// // ['user@mail.com', 'admin@mail.com']

// // Уникальные теги статьи
// const tags = ['js', 'react', 'js', 'node', 'react'];
// const uniqueTags = [...new Set(tags)];
// // ['js', 'react', 'node']

// // Уникальные ID пользователей
// const userIds = [1, 2, 2, 3, 1, 4];
// const uniqueIds = [...new Set(userIds)];
// // [1, 2, 3, 4]

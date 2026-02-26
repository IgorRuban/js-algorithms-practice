// 🚀 ЗАДАЧА №20 — Проверим новый формат!
// Условие:
// Найти пересечение двух массивов (общие элементы).

function intersection(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i]))
      result.push(arr1[i]);
  }
  return result;
}

console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(intersection([1, 2], [3, 4])); // []
console.log(intersection([1, 2, 2, 3], [2, 3]));

// function intersection(arr1, arr2) {
//   const set2 = new Set(arr2);
//   return [...new Set(arr1.filter(x => set2.has(x)))];
// }
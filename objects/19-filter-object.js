// Задача №19: Фильтрация свойств объекта
// Условие:
// Дан объект data = {a: 1, b: 2, c: 3, d: 4}.
// Задание: Создай новый объект только со значениями больше 2.

// function filterObject(obj, condition) {
//   return Object.fromEntries(
//     Object.entries(obj).filter(([key, value]) => condition(value)),
//   );
// }

function filterByKey(obj, condition) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => condition(key)),
  );
}
// console.log(filterObject({ a: 1, b: 2, c: 3, d: 4 }, (value) => value > 2)); // {c: 3, d: 4}
// console.log(
//   filterByKey({ name: 'Bob', age: 30, city: 'Paris' }, (key) => key.length > 3),
// ); // {name: 'Bob', city: 'Paris'}

function filterByBoth(obj, condition) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => condition(key, value)),
  );
}

// console.log(
//   filterByBoth(
//     { a: 1, b: 2, ab: 3, abc: 4 },
//     (key, value) => key.includes('a') && value > 2,
//   ),
// );
// {ab: 3, abc: 4}

function pickKeys(obj, keys) {
  return filterByKey(obj, (key) => keys.includes(key));
}

// console.log(pickKeys({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'c']));
// {a: 1, c: 3}

function omitKeys(obj, keys) {
  return filterByKey(obj, (key) => !keys.includes(key));
}

// console.log(omitKeys({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd']));
// {a: 1, c: 3}

const arr = [
  { id: 1, name: 'Anna', active: true, score: 85 },
  { id: 2, name: 'Bob', active: false, score: 92 },
  { id: 3, name: 'Carl', active: true, score: 78 },
];

function filterActiveUsers(arr, minScore) {
  return arr
    .filter((item) => item.active && item.score > minScore)
    .reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
}

const result = filterActiveUsers(arr, 80);

console.log(result);

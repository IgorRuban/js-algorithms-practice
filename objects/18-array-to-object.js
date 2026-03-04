//  №18: Преобразование массива в объект
// Условие:
// Дан массив [['name', 'Bob'], ['age', 30]].
// Задание: Преобразуй в объект {name: 'Bob', age: 30}.

// function arrayToObject(arr) {
//   return Object.fromEntries(arr);
// }

function arrayToObject(arr) {
  return arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

// console.log(
//   arrayToObject([
//     ['name', 'Bob'],
//     ['age', 30],
//   ]),
// );
// {name: 'Bob', age: 30}

function objectToArray(obj) {
  return Object.entries(obj);
}

// console.log(objectToArray({ name: 'Bob', age: 30 }));
// [['name', 'Bob'], ['age', 30]]

function swapKeysValues(obj) {
  return arrayToObject(objectToArray(obj).map(([key, value]) => [value, key]));
}

// console.log(swapKeysValues({ name: 'Bob', age: 30 }));

console.log(
  [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Carl' },
  ].reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
  }, {}),
);

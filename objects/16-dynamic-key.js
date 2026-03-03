// Задача №16: Динамический ключ
// Условие:
// Создай функцию createObj(key, value), которая возвращает объект с динамическим ключом.

function createObj(key, value) {
  return { [key]: value };
}

console.log(createObj('name', 'John')); // {name: 'John'}
console.log(createObj('age', 25)); // {age: 25}

function createMultiObj(key1, val1, key2, val2) {
  return { [key1]: val1, [key2]: val2 };
}

console.log(createMultiObj('name', 'Tom', 'age', 30));
// { name: 'Tom', age: 30 }

function addProp(obj, key, value) {
  obj[key] = value;
  return obj;
}

function mergeWithDynamicKey(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

console.log(
  [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ].reduce((acc, [key, value]) => ((acc[key] = value), acc), {}),
);

const prefix = 'user';
const obj = {
  [prefix + 'Name']: 'Tom',
  [prefix + 'Age']: 30,
  [prefix.toUpperCase()]: 'active',
};
console.log(obj);

// Задача №13: Object.assign() — слияние объектов
// Условие:
// Даны два объекта: obj1 = {a: 1, b: 2} и obj2 = {b: 3, c: 4}.
// Задание: Объедини их в новый объект с помощью Object.assign().

const obj1 = { a: 1, b: 2, x: 1 };
const obj2 = { b: 3, c: 4, x: 2 };
const obj3 = { d: 5, x: 3 };

const result = Object.assign({}, obj1, obj2, obj3);

console.log(obj1, obj2, obj3, result);

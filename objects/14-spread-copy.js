// Задача №14: Spread оператор для копирования
// Условие:
// Дан объект original = {x: 10, y: 20}.
// Задание: Создай копию через spread оператор и измени в копии x на 100.

const original = { x: 10, y: 20, nested: { b: 2 } };

const copy = { ...original, x: 100, z: 30 };

copy.nested.b = 999;

console.log(original);
console.log(copy);

const resultA = { ...{ a: 1 }, ...{ b: 2, a: 10 }, ...{ c: 3, a: 20 } };
console.log(resultA);

const copyNested = { ...original, nested: { ...original.nested, b: 2 } };
copyNested.nested.b = 'привет';
console.log(copyNested);

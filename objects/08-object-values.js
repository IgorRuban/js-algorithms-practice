// 🎯 Уровень 1 → Задача №8
// Условие:
// Дан объект prices = {apple: 50, banana: 30, orange: 40}.
// Задание: Найди сумму всех цен.

const prices = { apple: 50, banana: 30, orange: 40 };

const values = Object.values(prices);

console.log(values.reduce((sum, num) => num + sum, 0));

const total = Object.values(prices).reduce((sum, num) => sum + num, 0);
console.log(total); // 120

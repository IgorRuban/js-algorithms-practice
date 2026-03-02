// 🎯 Уровень 2 → Задача №11: Деструктуризация базовая
// Условие:
// Дан объект {name: 'John', age: 25, city: 'London'}.
// Задание: Извлеки name и age в отдельные переменные через деструктуризацию.

const person = { name: 'John', age: 25, city: 'London' };

const { name, city, country = 'Ukraine' } = person;

console.log(name);
console.log(city);
console.log(country);

// 🎯 Уровень 2 → Задача №12: Деструктуризация с переименованием
// Условие:
// Дан объект {firstName: 'Anna', lastName: 'Smith'}.
// Задание: Извлеки firstName как переменную name (переименуй при деструктуризации).

const person = { firstName: 'Anna', lastName: 'Smith' };

const { firstName: name, lastName: surname, age: years = 30 } = person;

console.log(name, surname, years);

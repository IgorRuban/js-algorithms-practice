// 🎯 Уровень 1 → Задача №7
// Условие:
// Дан объект student = {name: 'Max', age: 20, course: 2}.
// Задание: Получи массив всех ключей этого объекта.

// Object.keys() — возвращает массив ключей (keys)
// Object.values() — возвращает массив значений (values)
// Object.entries() — возвращает массив пар [ключ, значение] (entries)

const student = { name: 'Max', age: 20, course: 2 };

const keys = Object.keys(student);
console.log(keys);

// keys.length;           // 3
// keys.includes('name'); // true
// keys.forEach(key => console.log(key));
// keys.map(key => key.toUpperCase()); // ['NAME', 'AGE', 'COURSE']
// Когда полезно:

// Подсчитать количество свойств: Object.keys(obj).length
// Перебрать ключи через forEach, map, filter
// Проверить наличие ключа: Object.keys(obj).includes('name')

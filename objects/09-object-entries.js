// Задача
// У тебя есть объект с информацией о студентах и их оценках:
const students = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
  Diana: 90,
};
// Твоя цель:
// - Использовать Object.entries(), чтобы получить массив пар [имя, оценка].
// - Пройтись по этому массиву с помощью метода .forEach() или .map().
// - Вывести строки вида:
// "Студент Alice получил 85 баллов."

//  Дополнительный уровень (челлендж)
// - Отфильтруй студентов, у которых оценка выше 85, и выведи только их.
// - Подсчитай средний балл всех студентов, используя Object.entries() вместе с методами массива.

Object.entries(students).forEach((el) => {
  if (el[1] > 85) {
    console.log(`Студент ${el[0]} получил ${el[1]} баллов.`);
  }
});

console.log(
  Object.entries(students).reduce(
    (acc, num) => acc + num[1] / Object.keys(students).length,
    0,
  ),
);

const average = Object.entries(students).reduce(
  (acc, [, score]) => acc + score / Object.keys(students).length,
  0,
);
console.log(average);

// const count = Object.keys(students).length;
// const average = Object.entries(students).reduce(
//   (acc, [, score]) => acc + score / count,
//   0
// );
// console.log(average);

// Object.entries(students)
//   .filter(([, score]) => score > 85)
//   .map(([name, score]) => console.log(`Студент ${name} получил ${score} баллов.`));
